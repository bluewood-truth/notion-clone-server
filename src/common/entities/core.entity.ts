import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CoreEntity {
  @Field((type) => ID)
  id: string;

  @Field((type) => Date)
  createdAt: Date;

  @Field((type) => Date)
  updatedAt: Date;
}
