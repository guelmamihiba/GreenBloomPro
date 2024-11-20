import { Injectable } from '@nestjs/common';
import { CreateVasesDto } from './create-vases.dto';
import { UpdateVasesDto } from './update-vases.dto';
import { Vases } from './vases.entity';

@Injectable()
export class VasesService {
  private vases: Vases[] = [];

  create(createVasesDto: CreateVasesDto): Vases {
    const newVase = { id: Date.now(), ...createVasesDto };
    this.vases.push(newVase);
    return newVase;
  }

  findAll(): Vases[] {
    return this.vases;
  }

  findOne(id: number): Vases | null {
    return this.vases.find(item => item.id === id) || null;
  }

  update(id: number, updateVasesDto: UpdateVasesDto): Vases | null {
    const index = this.vases.findIndex(item => item.id === id);
    if (index > -1) {
      this.vases[index] = { ...this.vases[index], ...updateVasesDto };
      return this.vases[index];
    }
    return null;
  }

  remove(id: number): boolean {
    const index = this.vases.findIndex(item => item.id === id);
    if (index > -1) {
      this.vases.splice(index, 1);
      return true;
    }
    return false;
  }
}
