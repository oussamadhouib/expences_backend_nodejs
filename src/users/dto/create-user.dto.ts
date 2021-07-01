import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class SuccesUserType {
  @Field()
  readonly Success: boolean;
  @Field()
  readonly msg: string;
}


@ObjectType()
export class UserType {
  @Field()
  readonly _id: string;
  @Field({ nullable: true })
  readonly email: string;
  @Field({ nullable: true })
  readonly name: string;
  @Field({ nullable: true })
  readonly inCome?: number;
}
