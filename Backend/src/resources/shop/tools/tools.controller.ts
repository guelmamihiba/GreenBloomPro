import { Controller , Get , Post , Patch , Delete , Param , Body} from '@nestjs/common';
import { ToolsService } from './tools.service';
import { CreateToolsDto } from './create-tools.dto';
import { UpdateToolsDto } from './update-tools.dto';
import { ApiCreatedResponse, ApiNoContentResponse , ApiBadRequestResponse , ApiUnauthorizedResponse , ApiResponse , ApiNotFoundResponse, ApiInternalServerErrorResponse , ApiNotImplementedResponse, ApiServiceUnavailableResponse, ApiTags } from '@nestjs/swagger';
import { Tools } from './tools.entity';

@ApiTags('tools')
@Controller('tools')
export class ToolsController {
    constructor(private readonly toolsService: ToolsService){}

  @ApiCreatedResponse({ description: 'The record has been successfully created.', type: Tools})
  @ApiNoContentResponse({ description: 'No Content'})
  @ApiUnauthorizedResponse({ description: 'Unauthorized'})
  @ApiBadRequestResponse({ description: 'Bad Request'}) 
  @ApiResponse({ status: 403, description: 'Forbidden.'})
  @ApiNotFoundResponse({ description: 'Not Found'})
  @ApiInternalServerErrorResponse({ description: 'Internal Server Error'})
  @ApiNotImplementedResponse({ description: 'Not Implemented'})
  @ApiServiceUnavailableResponse({ description: 'Service Unavailable'})

  @Post()
  create(@Body() createToolsDto: CreateToolsDto) {
    return this.toolsService.create(createToolsDto);
  }

  @ApiCreatedResponse({ description: 'The record has been successfully created.', type: Tools})
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
    return this.toolsService.findAll();
  }

  @ApiCreatedResponse({ description: 'The record has been successfully created.', type: Tools})
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
    return this.toolsService.findOne(id);
  }
  

  @ApiCreatedResponse({ description: 'The record has been successfully created.', type: Tools})
  @ApiNoContentResponse({ description: 'No Content'})
  @ApiUnauthorizedResponse({ description: 'Unauthorized'})
  @ApiBadRequestResponse({ description: 'Bad Request'}) 
  @ApiResponse({ status: 403, description: 'Forbidden.'})
  @ApiNotFoundResponse({ description: 'Not Found'})
  @ApiInternalServerErrorResponse({ description: 'Internal Server Error'})
  @ApiNotImplementedResponse({ description: 'Not Implemented'})
  @ApiServiceUnavailableResponse({ description: 'Service Unavailable'})

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateToolsDto: UpdateToolsDto) {
    return this.toolsService.update(id, updateToolsDto);
  }

  
  @ApiCreatedResponse({ description: 'The record has been successfully created.', type: Tools})
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
    return this.toolsService.remove(id);
  }
}
