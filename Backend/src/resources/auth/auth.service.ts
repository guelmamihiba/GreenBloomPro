import { ConflictException, Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { SignUpDto } from './dto/sign-up.dto';
import { Users } from '../users/users.entity';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { MailingService } from '../../config/mailing/mailing.service';

import * as jwt from 'jsonwebtoken';
import { jwtConstants } from './constants';
import { SignInDto } from './dto/sign-in.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserPayloadType } from './types';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    private mailingService: MailingService,
    @InjectRepository(Users) private readonly userRepo: Repository<Users>
  ) {}

  async signIn({ email, password }: SignInDto): Promise<{ access_token: string }> {
    const user = await this.usersService.findByEmail(email);
    console.log(user);
    
    if (!user) throw new UnauthorizedException('Invalid email or password');

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) throw new UnauthorizedException('Invalid email or password');

    const payload = { sub: user.userId, email: user.email };
    const accessToken = this.jwtService.sign(payload);

    return { access_token: accessToken };
  }

  async signUp(signUpDto: SignUpDto) {

    const isDuplicated = await this.userRepo.findOneBy({ email: signUpDto.email });
    if (isDuplicated) throw new ConflictException(`Duplicated email! ${signUpDto.email}`);
    
    const hashedPassword = await bcrypt.hash(signUpDto.password, 10);
    
    // Generate the JWT token with email as the payload
    const token = jwt.sign({ ...signUpDto, password: hashedPassword }, jwtConstants.secret, { expiresIn: '4d' });

    return await this.mailingService.sendVerificationEmail({
      email: signUpDto.email,
      fullName: `${signUpDto.firstName} ${signUpDto.lastName}`,
      object: 'Account activation',
      token,
    });
  }

  async activateAccount(token: string) {
    try {
      const payload = jwt.verify(token, jwtConstants.secret) as UserPayloadType;
      const newUser = this.userRepo.create(payload);
      await this.userRepo.save({...newUser, isVerified: true});
      console.log(newUser);
      
    } catch (error) {
      throw new UnauthorizedException("Activation token is expired!")
    }
  }
}
