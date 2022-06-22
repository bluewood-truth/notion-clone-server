import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateNotionInput, CreateNotionOutput } from './dto/create-notion.dto';
import { DeleteNotionInput, DeleteNotionOutput } from './dto/delete-notion.dto';
import { EditNotionInput, EditNotionOutput } from './dto/edit-notion.dto';
import { GetNotionInput, GetNotionOutput } from './dto/get-notion.dto';
import { GetNotionsOutput } from './dto/get-notions.dto';
import { Notion } from './entities/notion.entity';
import { NotionsService } from './notions.service';

@Resolver((of) => Notion)
export class NotionsResolver {
  constructor(private readonly notionsService: NotionsService) {}

  @Query((returns) => GetNotionsOutput)
  getAllNotions(): Promise<GetNotionsOutput> {
    return this.notionsService.getAllNotions();
  }

  @Query((returns) => GetNotionOutput)
  getNotion(
    @Args('input', { type: () => GetNotionInput }) input: GetNotionInput,
  ): Promise<GetNotionOutput> {
    return this.notionsService.getNotion(input);
  }

  @Mutation((returns) => CreateNotionOutput)
  createNotion(
    @Args('input', { type: () => CreateNotionInput }) input: CreateNotionInput,
  ): Promise<CreateNotionOutput> {
    return this.notionsService.createNotion(input);
  }

  @Mutation((returns) => DeleteNotionOutput)
  deleteNotion(
    @Args('input', { type: () => DeleteNotionInput }) input: DeleteNotionInput,
  ): Promise<DeleteNotionOutput> {
    return this.notionsService.deleteNotion(input);
  }

  @Mutation((returns) => EditNotionOutput)
  editNotion(
    @Args('input', { type: () => EditNotionInput }) input: EditNotionInput,
  ): Promise<EditNotionOutput> {
    return this.notionsService.editNotion(input);
  }
}
