import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CoreStore<T extends { id: string }> {
  private store: readonly T[];

  constructor() {
    this.setStore([]);
  }

  protected getStore() {
    return this.store;
  }

  protected setStore(data: T[]) {
    this.store = Object.freeze(data);
  }

  getAll() {
    return this.getStore();
  }

  findById(id: string) {
    const toFind = this.getAll().find((data) => data.id === id);
    if (!toFind) {
      throw new NotFoundException(`Cannot found Notion with id: ${id}`);
    }

    return toFind;
  }

  create(data: T) {
    this.setStore([...this.getAll(), data]);
  }

  remove(id: string) {
    this.findById(id);
    this.setStore(this.getAll().filter((data) => data.id !== id));
  }

  update(data: T) {
    this.remove(data.id);
    this.create(data);
  }
}
