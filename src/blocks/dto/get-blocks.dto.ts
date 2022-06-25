import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { CoreOutput } from 'src/common/dto/output.dto';
import { Block, BlockType } from '../entities/block.entity';

@InputType()
export class GetBlocksInput {
  @Field((type) => BlockType, { nullable: true })
  type?: BlockType;
}

@ObjectType()
export class GetBlocksOutput extends CoreOutput {
  @Field((type) => [Block], { nullable: true })
  blocks?: Block[];
}
