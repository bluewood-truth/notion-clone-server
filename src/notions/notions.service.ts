import { Injectable } from '@nestjs/common';
import { Notion } from './entities/notion.entities';
import { NotionsStore } from './store/notions.store';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class NotionsService {
  constructor(private readonly store: NotionsStore) {}

  async getAllNotions(): Promise<Notion[]> {
    return [...(await this.store.getAll())];
  }

  async getNotion(id: string): Promise<Notion> {
    try {
      return this.store.findById(id);
    } catch (e) {
      console.error(e);
    }
  }

  async createNotion(owner: string): Promise<Notion> {
    const newNotion: Notion = {
      owner,
      id: uuidv4(),
      title: `${owner}의 Notion`,
    };

    await this.store.create(newNotion);
    return newNotion;
  }

  async deleteNotion(id: string): Promise<Notion> {
    const notion = this.getNotion(id);
    await this.store.remove(id);
    return notion;
  }

  async editNotionTitle(id: string, title: string): Promise<Notion> {
    const editedNotion = { ...(await this.getNotion(id)), title };
    await this.store.update(editedNotion);
    return editedNotion;
  }
}
