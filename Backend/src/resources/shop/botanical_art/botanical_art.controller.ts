import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BotanicalArtService } from './botanical_art.service';
import { CreateBotanicalArtDto } from './create-botanical_art.dto';
import { UpdateBotanicalArtDto } from './update-botanical_art.dto';

@Controller('botanical_art')
export class BotanicalArtController {
  constructor(private readonly botanicalArtService: BotanicalArtService) {}

  @Post()
  create(@Body() createBotanicalArtDto: CreateBotanicalArtDto) {
    return this.botanicalArtService.create(createBotanicalArtDto);
  }

  @Get()
  findAll() {
    return this.botanicalArtService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.botanicalArtService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBotanicalArtDto: UpdateBotanicalArtDto) {
    return this.botanicalArtService.update(+id, updateBotanicalArtDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.botanicalArtService.remove(+id);
  }
}
