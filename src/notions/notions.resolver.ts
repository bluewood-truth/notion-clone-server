import { Query, Resolver } from '@nestjs/graphql';
import { Notion } from './entities/notion.entities';
import { NotionsService } from './notions.service';

@Resolver((of) => Notion)
export class NotionsResolver {
  constructor(private readonly notionsService: NotionsService) {}

  @Query((returns) => [Notion])
  allNotions(): Notion[] {
    return this.notionsService.allNotions();
  }
}
