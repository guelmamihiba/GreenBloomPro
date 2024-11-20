import { Injectable } from '@nestjs/common';
import { CreateEssentionalOilsDto } from './create-essentional_oils.dto';
import { UpdateEssentionalOilsDto } from './update-essentional_oils.dto';
import { EssentionalOils } from './essentional_oils.entity';

@Injectable()
export class EssentionalOilsService {
  private essentialOils: EssentionalOils[] = [];

  create(createEssentialOilsDto: CreateEssentionalOilsDto): EssentionalOils {
    const newEssentialOil = { id: Date.now(), ...createEssentialOilsDto };
    this.essentialOils.push(newEssentialOil);
    return newEssentialOil;
  }

  findAll(): EssentionalOils[] {
    return this.essentialOils;
  }

  findOne(id: number): EssentionalOils | null {
    return this.essentialOils.find(item => item.id === id) || null;
  }

  update(id: number, updateEssentialOilsDto: UpdateEssentionalOilsDto): EssentionalOils | null {
    const index = this.essentialOils.findIndex(item => item.id === id);
    if (index > -1) {
      this.essentialOils[index] = { ...this.essentialOils[index], ...updateEssentialOilsDto };
      return this.essentialOils[index];
    }
    return null;
  }

  remove(id: number): boolean {
    const index = this.essentialOils.findIndex(item => item.id === id);
    if (index > -1) {
      this.essentialOils.splice(index, 1);
      return true;
    }
    return false;
  }
}
