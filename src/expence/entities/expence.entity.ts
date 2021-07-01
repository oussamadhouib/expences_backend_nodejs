import { ObjectType, Field } from '@nestjs/graphql';
import { CreateMediaDto } from '../../media/dto/create.media';
import { currency } from '../../shared/types';

@ObjectType()
export class Expence {
  @Field()
  name: string;
  @Field()
  currency: currency;
  @Field()
  price: number;
  @Field((type) => [CreateMediaDto], { nullable: true })
  receipt: CreateMediaDto[];
}


// @Prop()
//   name: string;
//   @Prop()
//   currency: currency;
//   @Prop()
//   price: number;
//   @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Media' }] })
//   receipt: Media[];