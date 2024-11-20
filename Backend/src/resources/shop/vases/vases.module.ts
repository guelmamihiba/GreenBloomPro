import { Module } from '@nestjs/common';
import { VasesService } from './vases.service';
import { VasesController } from './vases.controller';
import {Vases} from './vases.entity'
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Vases])],
  providers: [VasesService],
  controllers: [VasesController]
})
export class VasesModule {}
