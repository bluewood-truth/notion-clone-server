import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class BlockProperties {
  @Field({ nullable: true })
  title?: string;

  @Field({ nullable: true })
  checked?: boolean;
}
