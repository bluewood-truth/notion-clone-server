import { Injectable, NotFoundException } from '@nestjs/common';
import { Notion } from './entities/notion.entities';

@Injectable()
export class NotionsService {
  private notions: Notion[] = [];

  getAllNotions(): Notion[] {
    return this.notions;
  }

  getNotion(id: string): Notion {
    const notion = this.notions.find((notion) => notion.id === id);
    if (!notion) {
      throw new NotFoundException(`Cannot found Notion with id: ${id}`);
    }

    return notion;
  }

  createNotion(owner: string): Notion {
    const newNotion: Notion = {
      owner,
      id: String(Date.now()),
      title: `${owner}의 Notion`,
    };

    this.notions.push(newNotion);
    return newNotion;
  }

  deleteNotion(id: string): Notion {
    const notion = this.getNotion(id);
    this.notions = this.notions.filter((notion) => notion.id !== id);
    return notion;
  }

  editNotionTitle(id: string, title: string): Notion {
    const notion = this.getNotion(id);
    notion.title = title;
    return notion;
  }
}
