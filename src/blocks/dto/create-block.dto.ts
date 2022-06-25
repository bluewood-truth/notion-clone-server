import { Field, InputType, ObjectType, PickType } from '@nestjs/graphql';
import { CoreOutput } from 'src/common/dto/output.dto';
import { Block } from '../entities/block.entity';

@InputType()
export class CreateBlockInput extends PickType(Block, [
  'type',
  'properties',
  'parent',
]) {}

@ObjectType()
export class CreateBlockOutput extends CoreOutput {
  @Field((type) => Block, { nullable: true })
  block?: Block;
}
