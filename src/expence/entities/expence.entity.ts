import { ObjectType, Field } from '@nestjs/graphql';
import { currency } from '../../shared/types';

@ObjectType()
export class Expence {
  @Field()
  name: string;
  @Field((type) => currency)
  currency: currency;
  @Field()
  price: number;
  @Field((type) => String, { nullable: true })
  userId: string;
  @Field((type) => String, { nullable: true })
  wallet: string;
  @Field((type) => [String], { nullable: true })
  receipt: string[];
}

