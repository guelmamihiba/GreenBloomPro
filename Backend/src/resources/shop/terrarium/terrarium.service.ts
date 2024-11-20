import { Injectable } from '@nestjs/common';
import { CreateTerrariumDto } from './create-terrarium.dto';
import { UpdateTerrariumDto } from './update-terrarium.dto';

@Injectable()
export class TerrariumsService {
  private terrariums = [];

  create(createTerrariumsDto: CreateTerrariumDto) {
    const newTerrarium = { id: Date.now(), ...createTerrariumsDto };
    this.terrariums.push(newTerrarium);
    return newTerrarium;
  }

  findAll() {
    return this.terrariums;
  }

  findOne(id: number) {
    return this.terrariums.find(terrarium => terrarium.id === id);
  }

  update(id: number, updateTerrariumsDto: UpdateTerrariumDto) {
    const terrariumIndex = this.terrariums.findIndex(terrarium => terrarium.id === id);
    if (terrariumIndex > -1) {
      this.terrariums[terrariumIndex] = { ...this.terrariums[terrariumIndex], ...updateTerrariumsDto };
      return this.terrariums[terrariumIndex];
    }
    return null;
  }

  remove(id: number) {
    const terrariumIndex = this.terrariums.findIndex(terrarium => terrarium.id === id);
    if (terrariumIndex > -1) {
      const removedTerrarium = this.terrariums.splice(terrariumIndex, 1);
      return removedTerrarium[0];
    }
    return null;
  }
}
