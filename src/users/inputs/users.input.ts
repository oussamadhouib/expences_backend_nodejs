import { Field, InputType, ObjectType } from '@nestjs/graphql';

@ObjectType()
@InputType('userInput')
export class User_type {
  @Field()
  readonly name: string;
  @Field()
  readonly email: string;
  @Field({ nullable: true })
  readonly password?: string;
  @Field({ nullable: true })
  readonly inCome?: number;
}

@InputType('updateUserInput')
export class UpdateUserInput {
  @Field({ nullable: true })
  readonly name?: string;
  @Field({ nullable: true })
  readonly email?: string;
  @Field({ nullable: true })
  readonly password: string;
  @Field({ nullable: true })
  readonly inCome?: number;
}

@InputType('updateUserPassword')
export class updateUserPassword {
  @Field()
  readonly password: string;
}
