import { Module } from '@nestjs/common';
import { PagesResolver } from './pages.resolver';
import { PagesService } from './pages.service';
import { PagesStore } from './store/pages.store';

@Module({
  providers: [PagesResolver, PagesService, PagesStore],
  imports: [],
})
export class PagesModule {}
