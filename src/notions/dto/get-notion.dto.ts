import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { CoreOutput } from 'src/common/dto/output.dto';
import { Notion } from '../entities/notion.entity';

@InputType()
export class GetNotionInput {
  @Field((type) => String)
  id: string;
}

@ObjectType()
export class GetNotionOutput extends CoreOutput {
  @Field((type) => Notion, { nullable: true })
  notion?: Notion;
}
