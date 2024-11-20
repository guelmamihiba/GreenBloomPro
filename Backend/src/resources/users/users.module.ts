import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './users.entity';
import { JwtModule } from '@nestjs/jwt';
import { mailingModule } from 'src/config/mailing/mailing.module';


@Module({
  imports: [TypeOrmModule.forFeature([Users]),JwtModule , mailingModule],  //we import only module here 
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
