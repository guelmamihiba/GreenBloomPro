import { Injectable } from '@nestjs/common';
import { CreateToolsDto } from './create-tools.dto';
import { UpdateToolsDto } from './update-tools.dto';

@Injectable()
export class ToolsService {
  private tools = [];

  create(createToolsDto: CreateToolsDto) {
    const newTool = { id: Date.now(), ...createToolsDto };
    this.tools.push(newTool);
    return newTool;
  }

  findAll() {
    return this.tools;
  }

  findOne(id: number) {
    return this.tools.find(tool => tool.id === id);
  }

  update(id: number, updateToolsDto: UpdateToolsDto) {
    const toolIndex = this.tools.findIndex(tool => tool.id === id);
    if (toolIndex > -1) {
      this.tools[toolIndex] = { ...this.tools[toolIndex], ...updateToolsDto };
      return this.tools[toolIndex];
    }
    return null;
  }

  remove(id: number) {
    const toolIndex = this.tools.findIndex(tool => tool.id === id);
    if (toolIndex > -1) {
      const removedTool = this.tools.splice(toolIndex, 1);
      return removedTool[0];
    }
    return null;
  }
}
