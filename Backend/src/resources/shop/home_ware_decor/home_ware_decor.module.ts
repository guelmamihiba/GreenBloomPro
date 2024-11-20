import { Module } from '@nestjs/common';
import { HomewareController } from './home_ware_decor.controller';
import { HomewareService } from './home_ware_decor.service';
import { Homewares } from './home_ware_decor.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Homewares])],
  providers : [HomewareService],
  controllers: [HomewareController]
})
export class HomeWareDecorModule {}
