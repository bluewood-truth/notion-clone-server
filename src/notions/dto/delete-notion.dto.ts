import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { CoreOutput } from 'src/common/dto/output.dto';

@InputType()
export class DeleteNotionInput {
  @Field((type) => String)
  id: string;
}

@ObjectType()
export class DeleteNotionOutput extends CoreOutput {}
