import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FeaturedPlant } from './featuredPlants.entity';
import { CreateFeaturedPlantDto } from './create-featured-plant.dto';
import { UpdateFeaturedPlantDto } from './update-featured-plant.dto';

@Injectable()
export class FeaturedPlantsService {
  constructor(@InjectRepository(FeaturedPlant) private plantRepo: Repository<FeaturedPlant>) {}

  async create(createFeaturedPlantDto: CreateFeaturedPlantDto): Promise<FeaturedPlant> {
    const newPlant = this.plantRepo.create(createFeaturedPlantDto);
    return await this.plantRepo.save(newPlant);
  }

  async findAll(): Promise<FeaturedPlant[]> {
    return this.plantRepo.find();
  }

  async findOne(id: number): Promise<FeaturedPlant | null> {
    return this.plantRepo.findOne({ where: { id } });
  }

  async update(id: number, updateFeaturedPlantDto: UpdateFeaturedPlantDto): Promise<FeaturedPlant | null> {
    const plantToUpdate = await this.plantRepo.findOne({ where: { id } });
    if (!plantToUpdate) {
      return null;
    }
    const updatedPlant = Object.assign(plantToUpdate, updateFeaturedPlantDto);
    return this.plantRepo.save(updatedPlant);
  }

  async remove(id: number): Promise<boolean> {
    const result = await this.plantRepo.delete(id);
    return result.affected > 0;
  }
}
