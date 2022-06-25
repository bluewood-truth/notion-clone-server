import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CoreStore<T extends { id: string }> {
  private store: readonly T[];

  constructor() {
    this.setStore([]);
  }

  protected async getStore() {
    return this.store;
  }

  protected async setStore(data: T[]) {
    this.store = Object.freeze(data);
  }

  async getAll() {
    return this.getStore();
  }

  async find(
    predicate: (value: T, index: number, obj: readonly T[]) => boolean,
  ) {
    return (await this.getAll()).find(predicate);
  }

  async findAll(
    predicate: (value: T, index: number, array: readonly T[]) => boolean,
  ) {
    return (await this.getAll()).filter(predicate);
  }

  async findById(id: string) {
    const toFind = await this.find((data) => data.id === id);
    if (!toFind) {
      throw new NotFoundException();
    }

    return toFind;
  }

  async add(data: T) {
    await this.setStore([...(await this.getAll()), data]);
  }

  async remove(id: string) {
    await this.findById(id);
    await this.setStore((await this.getAll()).filter((data) => data.id !== id));
  }

  async update(data: T) {
    await this.remove(data.id);
    await this.add(data);
  }
}
