import { Injectable } from '@nestjs/common';
import { GetPagesInput, GetPagesOutput } from './dto/get-pages.dto';
import { PagesStore } from './store/pages.store';

@Injectable()
export class PagesService {
  constructor(private readonly store: PagesStore) {}

  async getPages({ owner }: GetPagesInput): Promise<GetPagesOutput> {
    return {
      pages: await this.store.findAllByOwner(owner),
    };
  }
}
