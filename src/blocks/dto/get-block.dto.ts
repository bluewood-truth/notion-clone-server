import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { CoreOutput } from 'src/common/dto/output.dto';
import { Block } from '../entities/block.entity';

@InputType()
export class GetBlockInput {
  @Field((type) => ID)
  id: string;
}

@ObjectType()
export class GetBlockOutput extends CoreOutput {
  @Field((type) => Block, { nullable: true })
  block?: Block;
}
