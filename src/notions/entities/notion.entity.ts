import { Field, ObjectType } from '@nestjs/graphql';
import { Page } from 'src/pages/entities/page.entity';

@ObjectType()
export class Notion {
  @Field()
  id: string;

  @Field()
  title: string;

  @Field()
  owner: string;

  @Field((type) => [Page])
  pages: Page[];
}
