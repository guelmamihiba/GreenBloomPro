import { Controller,Get,Post,Body, Patch,Param,Delete,} from '@nestjs/common';
import { FeaturedPlantsService } from './featuredPlants.service';
import { CreateFeaturedPlantDto } from './create-featured-plant.dto';
import { UpdateFeaturedPlantDto } from './update-featured-plant.dto';
import {ApiCreatedResponse,ApiNoContentResponse,  ApiUnauthorizedResponse, ApiBadRequestResponse, ApiResponse, ApiNotFoundResponse, ApiInternalServerErrorResponse, ApiNotImplementedResponse, ApiServiceUnavailableResponse,ApiTags,} from '@nestjs/swagger';

@ApiTags('featured-plants')
@Controller('featured-plants')
export class FeaturedPlantsController {
  constructor(private readonly featuredPlantsService: FeaturedPlantsService) {}

  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: FeaturedPlantsController,
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
  create(@Body() createFeaturedPlantDto: CreateFeaturedPlantDto) {
    return this.featuredPlantsService.create(createFeaturedPlantDto);
  }

  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: FeaturedPlantsController,
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
    return this.featuredPlantsService.findAll();
  }
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: FeaturedPlantsController,
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
    return this.featuredPlantsService.findOne(+id);
  }

  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: FeaturedPlantsController,
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
    @Body() updateFeaturedPlantDto: UpdateFeaturedPlantDto,
  ) {
    return this.featuredPlantsService.update(+id, updateFeaturedPlantDto);
  }

  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: FeaturedPlantsController,
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
    return this.featuredPlantsService.remove(+id);
  }
}
