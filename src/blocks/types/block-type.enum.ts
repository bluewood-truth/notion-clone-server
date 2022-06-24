import { registerEnumType } from '@nestjs/graphql';

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
