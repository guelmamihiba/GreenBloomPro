import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EssentionalOilsService } from './essentional_oils.service';
import { CreateEssentionalOilsDto } from './create-essentional_oils.dto';
import { UpdateEssentionalOilsDto } from './update-essentional_oils.dto';

@Controller('essentional-oils')
export class EssentionalOilsController {
  constructor(private readonly essentialOilsService: EssentionalOilsService) {}

  @Post()
  create(@Body() createEssentialOilsDto: CreateEssentionalOilsDto) {
    return this.essentialOilsService.create(createEssentialOilsDto);
  }

  @Get()
  findAll() {
    return this.essentialOilsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.essentialOilsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEssentialOilsDto: UpdateEssentionalOilsDto) {
    return this.essentialOilsService.update(+id, updateEssentialOilsDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.essentialOilsService.remove(+id);
  }
}
