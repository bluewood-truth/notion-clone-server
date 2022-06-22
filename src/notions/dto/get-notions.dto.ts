import { Field, ObjectType } from '@nestjs/graphql';
import { CoreOutput } from 'src/common/dto/output.dto';
import { Notion } from '../entities/notion.entity';

@ObjectType()
export class GetNotionsOutput extends CoreOutput {
  @Field((type) => [Notion], { nullable: true })
  notions?: Notion[];
}
