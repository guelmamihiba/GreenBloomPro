import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HomewareService } from './home_ware_decor.service';
import { CreateHomewareDto } from './create-home_ware_decor.dto';
import { UpdateHomewareDto } from './update-home_ware_decor.dto';
import { ApiBadRequestResponse, ApiCreatedResponse, ApiInternalServerErrorResponse, ApiNoContentResponse, ApiNotFoundResponse, ApiNotImplementedResponse, ApiResponse, ApiServiceUnavailableResponse, ApiTags, ApiUnauthorizedResponse } from '@nestjs/swagger';
import { Homewares } from './home_ware_decor.entity';

@ApiTags("homeware")
@Controller('homeware')
export class HomewareController {
  constructor(private readonly homewareService: HomewareService) {}

  
    @ApiCreatedResponse({ description: 'The record has been successfully created.', type: Homewares})
    @ApiNoContentResponse({ description: 'No Content'})
    @ApiUnauthorizedResponse({ description: 'Unauthorized'})
    @ApiBadRequestResponse({ description: 'Bad Request'}) 
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    @ApiNotFoundResponse({ description: 'Not Found'})
    @ApiInternalServerErrorResponse({ description: 'Internal Server Error'})
    @ApiNotImplementedResponse({ description: 'Not Implemented'})
    @ApiServiceUnavailableResponse({ description: 'Service Unavailable'})

  @Post()
  create(@Body() createHomewareDto: CreateHomewareDto) {
    return this.homewareService.create(createHomewareDto);
  }
  

  
    @ApiCreatedResponse({ description: 'The record has been successfully created.', type: Homewares})
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
    return this.homewareService.findAll();
  }


  @ApiCreatedResponse({ description: 'The record has been successfully created.', type: Homewares})
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
    return this.homewareService.findOne(+id);
  }


  @ApiCreatedResponse({ description: 'The record has been successfully created.', type: Homewares})
  @ApiNoContentResponse({ description: 'No Content'})
  @ApiUnauthorizedResponse({ description: 'Unauthorized'})
  @ApiBadRequestResponse({ description: 'Bad Request'}) 
  @ApiResponse({ status: 403, description: 'Forbidden.'})
  @ApiNotFoundResponse({ description: 'Not Found'})
  @ApiInternalServerErrorResponse({ description: 'Internal Server Error'})
  @ApiNotImplementedResponse({ description: 'Not Implemented'})
  @ApiServiceUnavailableResponse({ description: 'Service Unavailable'})

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHomewareDto: UpdateHomewareDto) {
    return this.homewareService.update(+id, updateHomewareDto);
  }
   
  @ApiCreatedResponse({ description: 'The record has been successfully created.', type: Homewares})
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
    return this.homewareService.remove(+id);
  }
}
