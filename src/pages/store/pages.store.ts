import { CoreStore } from 'src/common/store/core.store';
import { Page } from '../entities/page.entity';

export class PagesStore extends CoreStore<Page> {
  async findAllByOwner(owner: string) {
    return (await this.getAll()).filter((page) => page.owner === owner);
  }
}
