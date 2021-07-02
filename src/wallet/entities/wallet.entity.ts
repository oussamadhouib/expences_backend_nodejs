import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Wallet {
  @Field()
  id: string
  @Field(() => String)
  name: string;
}
