import { Module } from '@nestjs/common';
import { NotionsResolver } from './notions.resolver';
import { NotionsService } from './notions.service';

@Module({
  providers: [NotionsResolver, NotionsService],
})
export class NotionsModule {}
