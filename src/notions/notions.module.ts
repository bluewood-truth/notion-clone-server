import { Module } from '@nestjs/common';
import { NotionsResolver } from './notions.resolver';
import { NotionsService } from './notions.service';
import { NotionsStore } from './store/notions.store';

@Module({
  providers: [NotionsResolver, NotionsService, NotionsStore],
})
export class NotionsModule {}
