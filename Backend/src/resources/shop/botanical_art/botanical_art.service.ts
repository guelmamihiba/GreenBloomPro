import { Injectable } from '@nestjs/common';
import { CreateBotanicalArtDto } from './create-botanical_art.dto';
import { UpdateBotanicalArtDto } from './update-botanical_art.dto';
import { BotanicalArt } from './botanical_art.entity';

@Injectable()
export class BotanicalArtService {
  private botanicalArt: BotanicalArt[] = [];

  create(createBotanicalArtDto: CreateBotanicalArtDto): BotanicalArt {
    const newBotanicalArt = { id: Date.now(), ...createBotanicalArtDto };
    this.botanicalArt.push(newBotanicalArt);
    return newBotanicalArt;
  }

  findAll(): BotanicalArt[] {
    return this.botanicalArt;
  }

  findOne(id: number): BotanicalArt | null {
    return this.botanicalArt.find(item => item.id === id) || null;
  }

  update(id: number, updateBotanicalArtDto: UpdateBotanicalArtDto): BotanicalArt | null {
    const index = this.botanicalArt.findIndex(item => item.id === id);
    if (index > -1) {
      this.botanicalArt[index] = { ...this.botanicalArt[index], ...updateBotanicalArtDto };
      return this.botanicalArt[index];
    }
    return null;
  }

  remove(id: number): boolean {
    const index = this.botanicalArt.findIndex(item => item.id === id);
    if (index > -1) {
      this.botanicalArt.splice(index, 1);
      return true;
    }
    return false;
  }
}
