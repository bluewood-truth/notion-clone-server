import { Injectable } from '@nestjs/common';
import { Notion } from './entities/notion.entities';
import { NotionsStore } from './store/notions.store';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class NotionsService {
  constructor(private readonly store: NotionsStore) {}

  getAllNotions(): Notion[] {
    return [...this.store.getAll()];
  }

  getNotion(id: string): Notion {
    try {
      const notion = this.store.findById(id);
      return notion;
    } catch (e) {
      console.error(e);
    }
  }

  createNotion(owner: string): Notion {
    const newNotion: Notion = {
      owner,
      id: uuidv4(),
      title: `${owner}의 Notion`,
    };

    this.store.create(newNotion);
    return newNotion;
  }

  deleteNotion(id: string): Notion {
    const notion = this.getNotion(id);
    this.store.remove(id);
    return notion;
  }

  editNotionTitle(id: string, title: string): Notion {
    const editedNotion = { ...this.getNotion(id), title };
    this.store.update(editedNotion);
    return editedNotion;
  }
}
