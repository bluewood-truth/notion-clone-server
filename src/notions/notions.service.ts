import { Injectable } from '@nestjs/common';
import { Notion } from './entities/notion.entity';
import { NotionsStore } from './store/notions.store';
import { v4 as uuidv4 } from 'uuid';
import { CreateNotionInput, CreateNotionOutput } from './dto/create-notion.dto';
import { DeleteNotionInput, DeleteNotionOutput } from './dto/delete-notion.dto';
import { EditNotionInput, EditNotionOutput } from './dto/edit-notion.dto';
import { GetNotionsOutput } from './dto/get-notions.dto';
import { GetNotionInput, GetNotionOutput } from './dto/get-notion.dto';

@Injectable()
export class NotionsService {
  constructor(private readonly store: NotionsStore) {}

  async getAllNotions(): Promise<GetNotionsOutput> {
    return {
      notions: [...(await this.store.getAll())],
    };
  }

  async getNotion({ id }: GetNotionInput): Promise<GetNotionOutput> {
    try {
      const notion = await this.store.findById(id);
      return { notion };
    } catch {
      return {
        error: true,
        message: `Fail to get a notion. (id: ${id})`,
      };
    }
  }

  async createNotion({
    owner,
    title,
  }: CreateNotionInput): Promise<CreateNotionOutput> {
    try {
      const newNotion: Notion = {
        owner,
        id: uuidv4(),
        title: title || `${owner}의 Notion`,
        pages: [],
      };

      await this.store.create(newNotion);
      return { notion: newNotion };
    } catch {
      return {
        error: true,
        message: 'Fail to create a notion.',
      };
    }
  }

  async deleteNotion({ id }: DeleteNotionInput): Promise<DeleteNotionOutput> {
    try {
      await this.store.remove(id);
      return {};
    } catch {
      return {
        error: true,
        message: `Fail to delete a notion. (id: ${id})`,
      };
    }
  }

  async editNotion(input: EditNotionInput): Promise<EditNotionOutput> {
    const { notionId, ...others } = input;
    try {
      const { notion } = await this.getNotion({ id: notionId });
      const editedNotion = { ...notion, ...others };
      await this.store.update(editedNotion);
      return {
        notion: editedNotion,
      };
    } catch {
      return {
        error: true,
        message: `Fail to edit notion. (id: ${notionId})`,
      };
    }
  }
}
