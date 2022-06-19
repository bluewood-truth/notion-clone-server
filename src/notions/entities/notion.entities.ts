import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Notion {
  @Field()
  id: string;

  @Field()
  title: string;

  @Field()
  owner: string;
}
