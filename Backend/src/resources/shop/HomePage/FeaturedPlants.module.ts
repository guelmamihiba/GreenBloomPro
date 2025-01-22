import { Module } from '@nestjs/common';
import { FeaturedPlantsController } from './featuredPlants.controller';
import { FeaturedPlantsService } from './featuredPlants.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FeaturedPlant } from './featuredPlants.entity';

@Module({
  imports: [TypeOrmModule.forFeature([FeaturedPlant])],
  controllers: [FeaturedPlantsController],
  providers: [FeaturedPlantsService],
})
export class FeaturedPlantsModule {}
