import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { CreateBlockInput, CreateBlockOutput } from './dto/create-block.dto';
import { DeleteBlockInput, DeleteBlockOutput } from './dto/delete-block.dto';
import { EditBlockInput, EditBlockOutput } from './dto/edit-block.dto';
import { GetBlockInput, GetBlockOutput } from './dto/get-block.dto';
import { GetBlocksInput, GetBlocksOutput } from './dto/get-blocks.dto';
import { Block } from './entities/block.entity';
import { BlocksStore } from './store/blocks.store';

@Injectable()
export class BlocksService {
  constructor(private readonly store: BlocksStore) {}

  async getBlocks({ type }: GetBlocksInput): Promise<GetBlocksOutput> {
    const blocks = await this.store.findAll((block) => block.type === type);
    return { blocks };
  }

  async getBlock({ id }: GetBlockInput): Promise<GetBlockOutput> {
    const block = await this.store.find((block) => block.id === id);
    return { block };
  }

  async createBlock(input: CreateBlockInput): Promise<CreateBlockOutput> {
    const newBlock: Block = {
      id: uuidv4(),
      createdAt: new Date(),
      updatedAt: new Date(),
      children: [],
      ...input,
    };

    await this.store.add(newBlock);
    return { block: newBlock };
  }

  async deleteBlock({ id }: DeleteBlockInput): Promise<DeleteBlockOutput> {
    await this.store.remove(id);
    return {};
  }

  async editBlock({
    blockId,
    ...others
  }: EditBlockInput): Promise<EditBlockOutput> {
    const block = await this.store.find((block) => block.id === blockId);
    const editedBlock = { ...block, ...others, updatedAt: new Date() };
    await this.store.update(editedBlock);
    return { block: editedBlock };
  }
}
