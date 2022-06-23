import { Resolver, Query } from '@nestjs/graphql';
import { GetPagesInput, GetPagesOutput } from './dto/get-pages.dto';
import { PagesService } from './pages.service';

@Resolver()
export class PagesResolver {
  constructor(private readonly pagesService: PagesService) {}

  @Query((returns) => GetPagesOutput)
  async getPages(input: GetPagesInput): Promise<GetPagesOutput> {
    return this.pagesService.getPages(input);
  }
}
