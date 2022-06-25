import { Injectable } from '@nestjs/common';
import { BlocksStore } from './store/blocks.store';

@Injectable()
export class BlocksService {
  constructor(private readonly store: BlocksStore) {}
}
