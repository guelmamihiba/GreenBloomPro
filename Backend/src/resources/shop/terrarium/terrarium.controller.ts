import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TerrariumsService } from './terrarium.service';
import { CreateTerrariumDto } from './create-terrarium.dto';
import { UpdateTerrariumDto } from './update-terrarium.dto';
import { ApiBadRequestResponse, ApiCreatedResponse, ApiInternalServerErrorResponse, ApiNoContentResponse, ApiNotFoundResponse, ApiNotImplementedResponse, ApiResponse, ApiServiceUnavailableResponse, ApiTags, ApiUnauthorizedResponse } from '@nestjs/swagger';
import { Vases } from '../vases/vases.entity';

@ApiTags('terrariums')
@Controller('terrariums')
export class TerrariumsController {
  constructor(private readonly terrariumsService: TerrariumsService) {}

    @ApiCreatedResponse({ description: 'The record has been successfully created.', type: Vases})
    @ApiNoContentResponse({ description: 'No Content'})
    @ApiUnauthorizedResponse({ description: 'Unauthorized'})
    @ApiBadRequestResponse({ description: 'Bad Request'}) 
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    @ApiNotFoundResponse({ description: 'Not Found'})
    @ApiInternalServerErrorResponse({ description: 'Internal Server Error'})
    @ApiNotImplementedResponse({ description: 'Not Implemented'})
    @ApiServiceUnavailableResponse({ description: 'Service Unavailable'})

  @Post()
  create(@Body() createTerrariumsDto: CreateTerrariumDto) {
    return this.terrariumsService.create(createTerrariumsDto);
  }

  @ApiCreatedResponse({ description: 'The record has been successfully created.', type: Vases})
  @ApiNoContentResponse({ description: 'No Content'})
  @ApiUnauthorizedResponse({ description: 'Unauthorized'})
  @ApiBadRequestResponse({ description: 'Bad Request'}) 
  @ApiResponse({ status: 403, description: 'Forbidden.'})
  @ApiNotFoundResponse({ description: 'Not Found'})
  @ApiInternalServerErrorResponse({ description: 'Internal Server Error'})
  @ApiNotImplementedResponse({ description: 'Not Implemented'})
  @ApiServiceUnavailableResponse({ description: 'Service Unavailable'})

  @Get()
  findAll() {
    return this.terrariumsService.findAll();
  }


  @ApiCreatedResponse({ description: 'The record has been successfully created.', type: Vases})
  @ApiNoContentResponse({ description: 'No Content'})
  @ApiUnauthorizedResponse({ description: 'Unauthorized'})
  @ApiBadRequestResponse({ description: 'Bad Request'}) 
  @ApiResponse({ status: 403, description: 'Forbidden.'})
  @ApiNotFoundResponse({ description: 'Not Found'})
  @ApiInternalServerErrorResponse({ description: 'Internal Server Error'})
  @ApiNotImplementedResponse({ description: 'Not Implemented'})
  @ApiServiceUnavailableResponse({ description: 'Service Unavailable'})

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.terrariumsService.findOne(id);
  }


  @ApiCreatedResponse({ description: 'The record has been successfully created.', type: Vases})
  @ApiNoContentResponse({ description: 'No Content'})
  @ApiUnauthorizedResponse({ description: 'Unauthorized'})
  @ApiBadRequestResponse({ description: 'Bad Request'}) 
  @ApiResponse({ status: 403, description: 'Forbidden.'})
  @ApiNotFoundResponse({ description: 'Not Found'})
  @ApiInternalServerErrorResponse({ description: 'Internal Server Error'})
  @ApiNotImplementedResponse({ description: 'Not Implemented'})
  @ApiServiceUnavailableResponse({ description: 'Service Unavailable'})

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateTerrariumsDto: UpdateTerrariumDto) {
    return this.terrariumsService.update(id, updateTerrariumsDto);
  }
  

  @ApiCreatedResponse({ description: 'The record has been successfully created.', type: Vases})
  @ApiNoContentResponse({ description: 'No Content'})
  @ApiUnauthorizedResponse({ description: 'Unauthorized'})
  @ApiBadRequestResponse({ description: 'Bad Request'}) 
  @ApiResponse({ status: 403, description: 'Forbidden.'})
  @ApiNotFoundResponse({ description: 'Not Found'})
  @ApiInternalServerErrorResponse({ description: 'Internal Server Error'})
  @ApiNotImplementedResponse({ description: 'Not Implemented'})
  @ApiServiceUnavailableResponse({ description: 'Service Unavailable'})
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.terrariumsService.remove(id);
  }
}
