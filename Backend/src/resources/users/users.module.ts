import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { mailingModule } from '../../config/mailing/mailing.module';
import { User } from './users.entity';
import { UsersService } from './users.service';
// import { mailingModule } from '';


@Module({
  imports: [TypeOrmModule.forFeature([User]),JwtModule , mailingModule],  //we import only module here 
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
