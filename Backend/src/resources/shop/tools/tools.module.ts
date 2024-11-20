import { Module } from '@nestjs/common';
import { ToolsService } from './tools.service';
import { ToolsController } from './tools.controller';
import {Tools} from './tools.entity'
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Tools])],
  providers: [ToolsService],
  controllers: [ToolsController]
})
export class ToolsModule {}
