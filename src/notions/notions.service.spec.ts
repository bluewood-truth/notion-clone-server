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
      const { notions } = await service.getAllNotions();
      expect(notions).toBeInstanceOf(Array);
    });
  });

  describe('createNotion', () => {
    it('should create a notion', async () => {
      const beforeCreate = (await service.getAllNotions()).notions;
      await service.createNotion({ owner: 'testOwner' });
      const afterCreate = (await service.getAllNotions()).notions;
      expect(afterCreate.length).toBeGreaterThan(beforeCreate.length);
    });
  });

  describe('getNotion', () => {
    it('should get a notion', async () => {
      const { notion: created } = await service.createNotion({
        owner: 'testOwner',
      });
      const { notion } = await service.getNotion({ id: created.id });
      expect(notion.id).toBe(created.id);
    });

    it('should send an error', async () => {
      const { error } = await service.getNotion({ id: 'invaild-id' });
      expect(error).toBe(true);
    });
  });

  describe('deleteNotion', () => {
    it('should delete a notion', async () => {
      const { notion: created } = await service.createNotion({
        owner: 'testOwner',
      });
      const beforeDelete = (await service.getAllNotions()).notions;
      await service.deleteNotion({ id: created.id });
      const afterDelete = (await service.getAllNotions()).notions;
      expect(afterDelete.length).toBeLessThan(beforeDelete.length);
    });

    it('should send an error', async () => {
      const { error } = await service.deleteNotion({ id: 'invaild-id' });
      expect(error).toBe(true);
    });
  });

  describe('editNotion', () => {
    const newTitle = 'Edited title';

    it('should edit a title of a notion', async () => {
      const { notion: created } = await service.createNotion({
        owner: 'testOwner',
      });
      await service.editNotion({ notionId: created.id, title: newTitle });
      const { notion: edited } = await service.getNotion({ id: created.id });
      expect(edited.title).toBe(newTitle);
    });

    it('should send an error', async () => {
      const { error } = await service.editNotion({
        notionId: 'invaild-id',
        title: newTitle,
      });
      expect(error).toBe(true);
    });
  });
});
