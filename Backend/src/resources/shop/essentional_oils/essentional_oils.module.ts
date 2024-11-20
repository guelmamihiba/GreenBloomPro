import { Module } from '@nestjs/common';
import { EssentionalOilsService } from './essentional_oils.service';
import { EssentionalOilsController } from './essentional_oils.controller';
import { EssentionalOils } from './essentional_oils.entity'; 
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([EssentionalOils])],
  providers: [EssentionalOilsService],
  controllers: [EssentionalOilsController]
})
export class EssentionalOilsModule {}
