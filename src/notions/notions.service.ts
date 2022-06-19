import { Injectable } from '@nestjs/common';
import { Notion } from './entities/notion.entities';

@Injectable()
export class NotionsService {
  private notions: Notion[] = [];

  allNotions(): Notion[] {
    return this.notions;
  }
}
