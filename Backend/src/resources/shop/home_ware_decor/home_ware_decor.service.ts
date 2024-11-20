import { Injectable } from '@nestjs/common';
import { CreateHomewareDto } from './create-home_ware_decor.dto';
import { UpdateHomewareDto } from './update-home_ware_decor.dto';
import { Homewares } from './home_ware_decor.entity';

@Injectable()
export class HomewareService {
  private homeware: Homewares[] = [];

  create(createHomewareDto: CreateHomewareDto): Homewares {
    const newHomeware = { id: Date.now(), ...createHomewareDto };
    this.homeware.push(newHomeware);
    return newHomeware;
  }

  findAll(): Homewares[] {
    return this.homeware;
  }

  findOne(id: number): Homewares | null {
    return this.homeware.find(item => item.id === id) || null;
  }

  update(id: number, updateHomewareDto: UpdateHomewareDto): Homewares | null {
    const index = this.homeware.findIndex(item => item.id === id);
    if (index > -1) {
      this.homeware[index] = { ...this.homeware[index], ...updateHomewareDto };
      return this.homeware[index];
    }
    return null;
  }

  remove(id: number): boolean {
    const index = this.homeware.findIndex(item => item.id === id);
    if (index > -1) {
      this.homeware.splice(index, 1);
      return true;
    }
    return false;
  }
}
