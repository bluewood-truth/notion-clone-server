export class Block {
  id: string;
  type: BlockType;
  properties: BlockProperties;
  parent: string;
  children: string[];
}

export class BlockProperties {
  title?: string;
  isChecked?: boolean;
}

export enum BlockType {
  text,
  heading1,
  heading2,
  heading3,
  page,
  todoList,
  bulletedList,
  numberedList,
  toggleList,
}
