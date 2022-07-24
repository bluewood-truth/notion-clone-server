import { Controller, Get, Param } from '@nestjs/common';
import { Block } from './entities/block.entity';

const dummyBlocks: Block[] = [];

@Controller('blocks')
export class BlocksController {
  @Get()
  getAll(): Block[] {
    return dummyBlocks;
  }

  @Get(':id')
  getOne(@Param('id') id: string): Block {
    return dummyBlocks.find((block) => block.id === id);
  }
}
