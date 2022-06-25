import { Module } from '@nestjs/common';
import { BlocksResolver } from './blocks.resolver';
import { BlocksService } from './blocks.service';
import { BlocksStore } from './store/blocks.store';

@Module({
  providers: [BlocksService, BlocksResolver, BlocksStore],
})
export class BlocksModule {}
