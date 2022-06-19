import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Notion } from './entities/notion.entities';
import { NotionsService } from './notions.service';

@Resolver((of) => Notion)
export class NotionsResolver {
  constructor(private readonly notionsService: NotionsService) {}

  @Query((returns) => [Notion])
  allNotions(): Notion[] {
    return this.notionsService.getAllNotions();
  }

  @Query((returns) => Notion)
  notion(@Args('id', { type: () => String }) id: string): Notion {
    return this.notionsService.getNotion(id);
  }

  @Mutation((returns) => Notion)
  createNotion(@Args('owner', { type: () => String }) owner: string): Notion {
    return this.notionsService.createNotion(owner);
  }

  @Mutation((returns) => Notion)
  deleteNotion(@Args('id', { type: () => String }) id: string): Notion {
    return this.notionsService.deleteNotion(id);
  }

  @Mutation((returns) => Notion)
  editNotionTitle(
    @Args('id', { type: () => String }) id: string,
    @Args('title', { type: () => String }) title: string,
  ) {
    return this.notionsService.editNotionTitle(id, title);
  }
}
