import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { CoreOutput } from 'src/common/dto/output.dto';
import { Notion } from '../entities/notion.entity';

@InputType()
export class CreateNotionInput {
  @Field((type) => String, { nullable: true })
  title?: string;

  @Field((type) => String)
  owner: string;
}

@ObjectType()
export class CreateNotionOutput extends CoreOutput {
  @Field((type) => Notion, { nullable: true })
  notion?: Notion;
}
