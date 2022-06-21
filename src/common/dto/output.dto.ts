import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CoreOutput {
  @Field((type) => Boolean, { nullable: true })
  error?: boolean;

  @Field((type) => String, { nullable: true })
  message?: string;
}
