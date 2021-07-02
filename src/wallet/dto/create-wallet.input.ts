import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateWalletInput {
  @Field(() => String)
  name: number;
}
