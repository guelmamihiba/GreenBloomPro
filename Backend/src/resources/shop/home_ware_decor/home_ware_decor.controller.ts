import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HomewareService } from './home_ware_decor.service';
import { CreateHomewareDto } from './create-home_ware_decor.dto';
import { UpdateHomewareDto } from './update-home_ware_decor.dto';

@Controller('homeware')
export class HomewareController {
  constructor(private readonly homewareService: HomewareService) {}

  @Post()
  create(@Body() createHomewareDto: CreateHomewareDto) {
    return this.homewareService.create(createHomewareDto);
  }

  @Get()
  findAll() {
    return this.homewareService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.homewareService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHomewareDto: UpdateHomewareDto) {
    return this.homewareService.update(+id, updateHomewareDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.homewareService.remove(+id);
  }
}
