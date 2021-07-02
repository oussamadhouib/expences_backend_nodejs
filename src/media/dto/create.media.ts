import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
// import { PathType } from '../../product/types/product.type';

@ObjectType()
@InputType("Media_Input")
export class CreateMediaDto {
  @Field(() => ID)
  readonly _id: string;
  @Field({ nullable: true })
  readonly fieldname: string;
  @Field({ nullable: true })
  readonly originalname: string;
  @Field({ nullable: true })
  readonly encoding: string;
  @Field({ nullable: true })
  readonly mimetype: string;
  @Field({ nullable: true })
  readonly destination: string;
  @Field({ nullable: true })
  readonly filename: string;
  @Field({ nullable: true })
  readonly path: string;
  @Field({ nullable: true })
  readonly size: number;
  @Field({ nullable: true })
  readonly name?: string;
  // @Field({ nullable: true })
  // readonly url?: PathType;
}



