import { Field, InputType, ObjectType, PartialType } from '@nestjs/graphql';
import { CoreOutput } from 'src/common/dto/output.dto';
import { Notion } from '../entities/notion.entities';
import { CreateNotionInput } from './create-notion.dto';

@InputType()
export class EditNotionInput extends PartialType(CreateNotionInput) {
  @Field((type) => String)
  notionId: string;
}

@ObjectType()
export class EditNotionOutput extends CoreOutput {
  @Field((type) => Notion, { nullable: true })
  notion?: Notion;
}
