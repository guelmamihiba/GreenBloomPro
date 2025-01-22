import { Injectable } from '@nestjs/common';
import { CreateEssentionalOilsDto } from './create-essentional_oils.dto';
import { UpdateEssentionalOilsDto } from './update-essentional_oils.dto';
import { EssentionalOils } from './essentional_oils.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class EssentionalOilsService {

  constructor(@InjectRepository(EssentionalOils) private oilRepo: Repository<EssentionalOils>) {}

  async create(createessentionalOilsDto: CreateEssentionalOilsDto): Promise<EssentionalOils> {
    return await this.oilRepo.save(createessentionalOilsDto);;
  }

  async findAll(): Promise<EssentionalOils[]> {
    return this.oilRepo.find();
  }

  async findOne(id: number): Promise<EssentionalOils | null> {
    return this.oilRepo.findOne({ where: { id } });
  }

  async update(id: number, updateEssentialOilsDto: UpdateEssentionalOilsDto): Promise<EssentionalOils | null> {
    const oilToUpdate = await this.oilRepo.findOne({ where: { id } });
    if (!oilToUpdate) {
      return null;
    }
    const updatedOil = Object.assign(oilToUpdate, updateEssentialOilsDto);
    return this.oilRepo.save(updatedOil);
  }

  async remove(id: number): Promise<boolean> {
    const result = await this.oilRepo.delete(id);
    return result.affected > 0;
  }
}