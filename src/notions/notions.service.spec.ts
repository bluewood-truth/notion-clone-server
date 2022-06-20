import { NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { NotionsService } from './notions.service';
import { NotionsStore } from './store/notions.store';

describe('NotionsService', () => {
  let service: NotionsService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NotionsService, NotionsStore],
    }).compile();

    service = module.get<NotionsService>(NotionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getAllNotions', () => {
    it('should return an array', async () => {
      const result = await service.getAllNotions();
      expect(result).toBeInstanceOf(Array);
    });
  });

  describe('createNotion', () => {
    it('should create a notion', async () => {
      const beforeCreate = await service.getAllNotions();
      await service.createNotion('testOwner');
      const afterCreate = await service.getAllNotions();
      expect(afterCreate.length).toBeGreaterThan(beforeCreate.length);
    });
  });

  describe('getNotion', () => {
    it('should get a notion', async () => {
      const created = await service.createNotion('testOwner');
      const notion = await service.getNotion(created.id);
      expect(notion.id).toBe(created.id);
    });
    it('should throw a NotFoundException', async () => {
      try {
        await service.getNotion('invaild-id');
      } catch (e) {
        expect(e).toBeInstanceOf(NotFoundException);
      }
    });
  });

  describe('deleteNotion', () => {
    it('should delete a notion', async () => {
      const created = await service.createNotion('testOwner');
      const beforeDelete = await service.getAllNotions();
      await service.deleteNotion(created.id);
      const afterDelete = await service.getAllNotions();
      expect(afterDelete.length).toBeLessThan(beforeDelete.length);
    });
    it('should throw a NotFoundException', async () => {
      try {
        await service.deleteNotion('invaild-id');
      } catch (e) {
        expect(e).toBeInstanceOf(NotFoundException);
      }
    });
  });

  describe('editNotionTitle', () => {
    it('should edit a title of a notion', async () => {
      const newTitle = 'Edited title';
      const created = await service.createNotion('testOwner');
      await service.editNotionTitle(created.id, newTitle);
      const edited = await service.getNotion(created.id);
      expect(edited.title).toBe(newTitle);
    });
  });
});
