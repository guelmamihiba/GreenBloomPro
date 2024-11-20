import { Controller , Get , Post , Patch , Delete , Param , Body} from '@nestjs/common';
import { ToolsService } from './tools.service';
import { CreateToolsDto } from './create-tools.dto';
import { UpdateToolsDto } from './update-tools.dto';

@Controller('tools')
export class ToolsController {
    constructor(private readonly toolsService: ToolsService){}

    @Post()
  create(@Body() createToolsDto: CreateToolsDto) {
    return this.toolsService.create(createToolsDto);
  }

  @Get()
  findAll() {
    return this.toolsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.toolsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateToolsDto: UpdateToolsDto) {
    return this.toolsService.update(id, updateToolsDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.toolsService.remove(id);
  }
}
