import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { BlocksService } from './blocks.service';
import { CreateBlockInput, CreateBlockOutput } from './dto/create-block.dto';
import { DeleteBlockInput, DeleteBlockOutput } from './dto/delete-block.dto';
import { EditBlockInput, EditBlockOutput } from './dto/edit-block.dto';
import { GetBlockInput, GetBlockOutput } from './dto/get-block.dto';
import { GetBlocksInput, GetBlocksOutput } from './dto/get-blocks.dto';
import { Block } from './entities/block.entity';

@Resolver((of) => Block)
export class BlocksResolver {
  constructor(private readonly blocksService: BlocksService) {}

  @Query((returns) => GetBlocksOutput)
  async getBlocks(
    @Args('input', { type: () => GetBlocksInput }) input: GetBlocksInput,
  ): Promise<GetBlocksOutput> {
    return this.blocksService.getBlocks(input);
  }

  @Query((returns) => GetBlockOutput)
  async getBlock(
    @Args('input', { type: () => GetBlockInput }) input: GetBlockInput,
  ): Promise<GetBlockOutput> {
    return this.blocksService.getBlock(input);
  }

  @Mutation((returns) => CreateBlockOutput)
  async createBlock(
    @Args('input', { type: () => CreateBlockInput }) input: CreateBlockInput,
  ): Promise<CreateBlockOutput> {
    return this.blocksService.createBlock(input);
  }

  @Mutation((returns) => DeleteBlockOutput)
  async deleteBlock(
    @Args('input', { type: () => DeleteBlockInput }) input: DeleteBlockInput,
  ): Promise<DeleteBlockOutput> {
    return this.blocksService.deleteBlock(input);
  }

  @Mutation((returns) => EditBlockOutput)
  async editBlock(
    @Args('input', { type: () => EditBlockInput }) input: EditBlockInput,
  ): Promise<EditBlockOutput> {
    return this.blocksService.editBlock(input);
  }
}
