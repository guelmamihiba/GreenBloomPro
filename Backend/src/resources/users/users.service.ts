import { Injectable } from '@nestjs/common';
import { Users } from './users.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private usersRepository: Repository<Users>,
  ) {}

  async findByEmail(email: string): Promise<Users | undefined> {
    return this.usersRepository.findOne({ where: { email } });
  }

  async create(user: Partial<Users>): Promise<Users> {
    return this.usersRepository.save(user);
  }

  async update(user: Users): Promise<Users> {
    return this.usersRepository.save(user);
  }
}
