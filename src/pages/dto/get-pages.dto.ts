import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { CoreOutput } from 'src/common/dto/output.dto';
import { Page } from '../entities/page.entity';

@InputType()
export class GetPagesInput {
  @Field((type) => String)
  owner: string;
}

@ObjectType()
export class GetPagesOutput extends CoreOutput {
  @Field((type) => [Page])
  pages?: Page[];
}
