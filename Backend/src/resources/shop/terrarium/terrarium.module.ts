import { Module } from '@nestjs/common';
import { TerrariumsService } from './terrarium.service';
import { TerrariumsController } from './terrarium.controller';
import { Terrariums } from './terrarium.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [TypeOrmModule.forFeature([Terrariums])],
  providers: [TerrariumsService],
  controllers: [TerrariumsController]
})
export class TerrariumModule {}
