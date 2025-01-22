import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { MailingService } from '../../config/mailing/mailing.service';
import { User } from '../users/users.entity';
import { UsersService } from '../users/users.service';
import { SignUpDto } from './dto/sign-up.dto';

import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import * as jwt from 'jsonwebtoken';
import { Repository } from 'typeorm';
import { jwtConstants } from './constants';
import { UserPayloadType } from './types';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private mailingService: MailingService,
    private jwtService: JwtService,
    @InjectRepository(User) private readonly userRepo: Repository<User>,
  ) {}

  // async signIn({ email, password }: SignInDto): Promise<{ access_token: string }> {
  //   const user = await this.usersService.findByEmail(email);
  //   console.log(user);

  //   if (!user) throw new UnauthorizedException('Invalid email or password');

  //   const isPasswordValid = await bcrypt.compare(password, user.password);
  //   if (!isPasswordValid) throw new UnauthorizedException('Invalid email or password');

  //   const payload = { sub: user.userId, email: user.email };
  //   const accessToken = this.jwtService.sign(payload);

  //   return { access_token: accessToken };
  // }

  async validateUser(email: string, password: string) {
    const user = await this.usersService.findByEmail(email);
    if (user) {
      if (await bcrypt.compare(password, user.password))
        delete user.password;
      return user;
    }
    return null;
  }

  async login(user: User) {
    const payload = { email: user.email };
    return { token: this.jwtService.sign(payload) };
  }

  async signUp(signUpDto: SignUpDto) {
    const isDuplicated = await this.userRepo.findOneBy({
      email: signUpDto.email,
    });
    if (isDuplicated)
      throw new ConflictException(`Duplicated email! ${signUpDto.email}`);

    const hashedPassword = await bcrypt.hash(signUpDto.password, 10);

    const token = jwt.sign(
      { ...signUpDto, password: hashedPassword },
      jwtConstants.secret,
      { expiresIn: '4d' },
    );

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
      await this.userRepo.save({ ...newUser, isVerified: true });
      console.log(newUser);
    } catch (error) {
      throw new UnauthorizedException('Activation token is expired!');
    }
  }
}
