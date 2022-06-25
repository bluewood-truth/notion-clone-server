import { Resolver } from '@nestjs/graphql';
import { BlocksService } from './blocks.service';

@Resolver()
export class BlocksResolver {
  constructor(private readonly blocksService: BlocksService) {}
}
