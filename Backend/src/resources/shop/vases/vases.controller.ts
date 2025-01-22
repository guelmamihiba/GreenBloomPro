import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VasesService } from './vases.service';
import { CreateVasesDto } from './create-vases.dto';
import { UpdateVasesDto } from './update-vases.dto';
import { ApiBadRequestResponse, ApiCreatedResponse, ApiInternalServerErrorResponse, ApiNoContentResponse, ApiNotFoundResponse, ApiNotImplementedResponse, ApiOkResponse, ApiResponse, ApiServiceUnavailableResponse, ApiTags, ApiUnauthorizedResponse } from '@nestjs/swagger';
import { Vases } from './vases.entity';

@ApiTags('vases')
@Controller('vases')
export class VasesController {
  constructor(private readonly vasesService: VasesService) {}

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
  create(@Body() createVasesDto: CreateVasesDto) {
    return this.vasesService.create(createVasesDto);
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
    return this.vasesService.findAll();
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
  findOne(@Param('id') id: string) {
    return this.vasesService.findOne(+id);
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
  update(@Param('id') id: string, @Body() updateVasesDto: UpdateVasesDto) {
    return this.vasesService.update(+id, updateVasesDto);
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
  remove(@Param('id') id: string) {
    return this.vasesService.remove(+id);
  }
}
