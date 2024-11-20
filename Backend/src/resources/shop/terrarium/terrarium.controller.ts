import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TerrariumsService } from './terrarium.service';
import { CreateTerrariumDto } from './create-terrarium.dto';
import { UpdateTerrariumDto } from './update-terrarium.dto';

@Controller('terrariums')
export class TerrariumsController {
  constructor(private readonly terrariumsService: TerrariumsService) {}

  @Post()
  create(@Body() createTerrariumsDto: CreateTerrariumDto) {
    return this.terrariumsService.create(createTerrariumsDto);
  }

  @Get()
  findAll() {
    return this.terrariumsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.terrariumsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateTerrariumsDto: UpdateTerrariumDto) {
    return this.terrariumsService.update(id, updateTerrariumsDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.terrariumsService.remove(id);
  }
}
