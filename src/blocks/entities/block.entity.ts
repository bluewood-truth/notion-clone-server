import { Field, ID, ObjectType } from '@nestjs/graphql';
import { CoreEntity } from 'src/common/entities/core.entity';
import { BlockProperties } from '../types/block-properties.obejct';
import { BlockType } from '../types/block-type.enum';

@ObjectType()
export class Block extends CoreEntity {
  @Field((type) => ID)
  id: string;

  @Field((type) => BlockType)
  type: BlockType;

  @Field((type) => BlockProperties)
  properties: BlockProperties;

  @Field((type) => Block, { nullable: true })
  parent?: Block;

  @Field((type) => [Block])
  children: Block[];
}
