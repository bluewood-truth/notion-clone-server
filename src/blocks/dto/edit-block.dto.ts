import { Field, InputType, ObjectType, PartialType } from '@nestjs/graphql';
import { CoreOutput } from 'src/common/dto/output.dto';
import { Block } from '../entities/block.entity';
import { CreateBlockInput } from './create-block.dto';

@InputType()
export class EditBlockInput extends PartialType(CreateBlockInput) {
  @Field((type) => String)
  blockId: string;
}

@ObjectType()
export class EditBlockOutput extends CoreOutput {
  @Field((type) => Block, { nullable: true })
  block?: Block;
}
