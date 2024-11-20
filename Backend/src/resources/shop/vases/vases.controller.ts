import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VasesService } from './vases.service';
import { CreateVasesDto } from './create-vases.dto';
import { UpdateVasesDto } from './update-vases.dto';

@Controller('vases')
export class VasesController {
  constructor(private readonly vasesService: VasesService) {}

  @Post()
  create(@Body() createVasesDto: CreateVasesDto) {
    return this.vasesService.create(createVasesDto);
  }

  @Get()
  findAll() {
    return this.vasesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.vasesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVasesDto: UpdateVasesDto) {
    return this.vasesService.update(+id, updateVasesDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.vasesService.remove(+id);
  }
}
