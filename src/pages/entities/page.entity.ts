import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Page {
  @Field()
  id: string;

  @Field()
  title: string;

  @Field()
  owner: string;

  @Field((type) => Page, { nullable: true })
  parent: Page;

  @Field((type) => [Page])
  children: Page[];
}
