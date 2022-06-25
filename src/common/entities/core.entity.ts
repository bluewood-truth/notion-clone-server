import { Field, ID, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CoreEntity {
  @Field((type) => ID)
  id: string;

  @Field((type) => Int)
  createdAt: number;

  @Field((type) => Int)
  updatedAt: number;
}
