import { Controller, Get, Post,Body, Patch,Param, Delete,} from '@nestjs/common';
import { BotanicalArtService } from './botanical_art.service';
import { CreateBotanicalArtDto } from './create-botanical_art.dto';
import { UpdateBotanicalArtDto } from './update-botanical_art.dto';
import { ApiBadRequestResponse, ApiCreatedResponse, ApiInternalServerErrorResponse, ApiNoContentResponse, ApiNotFoundResponse, ApiNotImplementedResponse,ApiResponse, ApiServiceUnavailableResponse, ApiTags, ApiUnauthorizedResponse,} from '@nestjs/swagger';
import { BotanicalArt } from './botanical_art.entity';

@ApiTags('botanical_art')
@Controller('botanical_art')
export class BotanicalArtController {
  constructor(private readonly botanicalArtService: BotanicalArtService) {}

  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: BotanicalArt,
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
  create(@Body() createBotanicalArtDto: CreateBotanicalArtDto) {
    return this.botanicalArtService.create(createBotanicalArtDto);
  }

  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: BotanicalArt,
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
  findAll() {
    return this.botanicalArtService.findAll();
  }

  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: BotanicalArt,
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
  findOne(@Param('id') id: string) {
    return this.botanicalArtService.findOne(+id);
  }

  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: BotanicalArt,
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
  update(
    @Param('id') id: string,
    @Body() updateBotanicalArtDto: UpdateBotanicalArtDto,
  ) {
    return this.botanicalArtService.update(+id, updateBotanicalArtDto);
  }

  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: BotanicalArt,
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
  remove(@Param('id') id: string) {
    return this.botanicalArtService.remove(+id);
  }
}
