import {Controller, Get, Post, Body, Patch, Param, Delete,
} from '@nestjs/common';
import { EssentionalOilsService } from './essentional_oils.service';
import { CreateEssentionalOilsDto } from './create-essentional_oils.dto';
import { UpdateEssentionalOilsDto } from './update-essentional_oils.dto';
import { Tools } from '../tools/tools.entity';
import { ApiCreatedResponse, ApiNoContentResponse, ApiUnauthorizedResponse, ApiBadRequestResponse, ApiResponse, ApiNotFoundResponse, ApiInternalServerErrorResponse,  ApiNotImplementedResponse, ApiServiceUnavailableResponse,ApiTags,
} from '@nestjs/swagger';

@ApiTags('essentional-oils')
@Controller('essentional-oils')
export class EssentionalOilsController {
  constructor(private readonly essentialOilsService: EssentionalOilsService) {}

  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: Tools,
  })
  @ApiNoContentResponse({ description: 'No Content' })
  @ApiUnauthorizedResponse({ description: 'Unauthorized' })
  @ApiBadRequestResponse({ description: 'Bad Request' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiNotFoundResponse({ description: 'Not Found' })
  @ApiInternalServerErrorResponse({ description: 'Internal Server Error' })
  @ApiNotImplementedResponse({ description: 'Not Implemented' })
  @ApiServiceUnavailableResponse({ description: 'Service Unavailable' })

  @Post()
  create(@Body() createEssentialOilsDto: CreateEssentionalOilsDto) {
    return this.essentialOilsService.create(createEssentialOilsDto);
  }

  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: Tools,
  })
  @ApiNoContentResponse({ description: 'No Content' })
  @ApiUnauthorizedResponse({ description: 'Unauthorized' })
  @ApiBadRequestResponse({ description: 'Bad Request' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiNotFoundResponse({ description: 'Not Found' })
  @ApiInternalServerErrorResponse({ description: 'Internal Server Error' })
  @ApiNotImplementedResponse({ description: 'Not Implemented' })
  @ApiServiceUnavailableResponse({ description: 'Service Unavailable' })

  @Get()
  async findAll() {
    return this.essentialOilsService.findAll();
  }

  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: Tools,
  })
  @ApiNoContentResponse({ description: 'No Content' })
  @ApiUnauthorizedResponse({ description: 'Unauthorized' })
  @ApiBadRequestResponse({ description: 'Bad Request' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiNotFoundResponse({ description: 'Not Found' })
  @ApiInternalServerErrorResponse({ description: 'Internal Server Error' })
  @ApiNotImplementedResponse({ description: 'Not Implemented' })
  @ApiServiceUnavailableResponse({ description: 'Service Unavailable' })

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.essentialOilsService.findOne(+id);
  }

  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: Tools,
  })
  @ApiNoContentResponse({ description: 'No Content' })
  @ApiUnauthorizedResponse({ description: 'Unauthorized' })
  @ApiBadRequestResponse({ description: 'Bad Request' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiNotFoundResponse({ description: 'Not Found' })
  @ApiInternalServerErrorResponse({ description: 'Internal Server Error' })
  @ApiNotImplementedResponse({ description: 'Not Implemented' })
  @ApiServiceUnavailableResponse({ description: 'Service Unavailable' })

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateEssentialOilsDto: UpdateEssentionalOilsDto,
  ) {
    return this.essentialOilsService.update(+id, updateEssentialOilsDto);
  }

  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: Tools,
  })
  @ApiNoContentResponse({ description: 'No Content' })
  @ApiUnauthorizedResponse({ description: 'Unauthorized' })
  @ApiBadRequestResponse({ description: 'Bad Request' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiNotFoundResponse({ description: 'Not Found' })
  @ApiInternalServerErrorResponse({ description: 'Internal Server Error' })
  @ApiNotImplementedResponse({ description: 'Not Implemented' })
  @ApiServiceUnavailableResponse({ description: 'Service Unavailable' })
  
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.essentialOilsService.remove(+id);
  }
}
