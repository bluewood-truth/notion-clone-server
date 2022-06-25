import {
  Field,
  ID,
  InputType,
  ObjectType,
  registerEnumType,
} from '@nestjs/graphql';
import { CoreEntity } from 'src/common/entities/core.entity';

export enum BlockType {
  notion,
  page,
  text,
  to_do,
  heading_1,
  heading_2,
  heading_3,
  bulleted_list,
  numbered_list,
  toggle_list,
  divider,
}

registerEnumType(BlockType, { name: 'BlockType' });

@InputType('BlockPropertiesInputType', { isAbstract: true })
@ObjectType()
export class BlockProperties {
  @Field({ nullable: true })
  title?: string;

  @Field({ nullable: true })
  checked?: boolean;
}

@InputType('BlockInputType', { isAbstract: true })
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
