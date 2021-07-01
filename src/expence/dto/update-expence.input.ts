import { CreateExpenceInput } from './create-expence.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateExpenceInput extends PartialType(CreateExpenceInput) {
  @Field(() => Int)
  id: number;
}
