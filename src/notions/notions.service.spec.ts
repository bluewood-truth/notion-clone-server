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
    it('should return an array', () => {
      const result = service.getAllNotions();
      expect(result).toBeInstanceOf(Array);
    });
  });

  describe('createNotion', () => {
    it('should create a notion', () => {
      const beforeCreate = service.getAllNotions().length;
      service.createNotion('testOwner');
      const afterCreate = service.getAllNotions().length;
      expect(afterCreate).toBeGreaterThan(beforeCreate);
    });
  });

  describe('getNotion', () => {
    it('should get a notion', () => {
      const { id } = service.createNotion('testOwner');
      const notion = service.getNotion(id);
      expect(notion.id).toBe(id);
    });
    it('should throw a NotFoundException', () => {
      try {
        service.getNotion('invaild-id');
      } catch (e) {
        expect(e).toBeInstanceOf(NotFoundException);
      }
    });
  });

  describe('deleteNotion', () => {
    it('should delete a notion', () => {
      const created = service.createNotion('testOwner');
      const beforeDelete = service.getAllNotions().length;
      service.deleteNotion(created.id);
      const afterDelete = service.getAllNotions().length;
      expect(afterDelete).toBeLessThan(beforeDelete);
    });
    it('should throw a NotFoundException', () => {
      try {
        service.deleteNotion('invaild-id');
      } catch (e) {
        expect(e).toBeInstanceOf(NotFoundException);
      }
    });
  });

  describe('editNotionTitle', () => {
    it('should edit a title of a notion', () => {
      const newTitle = 'Edited title';
      const { id } = service.createNotion('testOwner');
      service.editNotionTitle(id, newTitle);
      const edited = service.getNotion(id);
      expect(edited.title).toBe(newTitle);
    });
  });
});
