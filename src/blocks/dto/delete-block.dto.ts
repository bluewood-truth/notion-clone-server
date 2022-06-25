import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { CoreOutput } from 'src/common/dto/output.dto';

@InputType()
export class DeleteBlockInput {
  @Field((type) => ID)
  id: string;
}

@ObjectType()
export class DeleteBlockOutput extends CoreOutput {}
