import { Field, ObjectType } from '@nestjs/graphql';
import { Role } from './create-user.dto';

@ObjectType()
export class LoginType {
  @Field({ nullable: true })
  readonly email: string;
  @Field({ nullable: true })
  readonly password: string;
}

@ObjectType()
export class tokenResponse {
  @Field({ nullable: true })
  readonly expiresIn: string;
  @Field({ nullable: true })
  readonly token: string;
  @Field({ nullable: true })
  readonly success: boolean;
  @Field({ nullable: true })
  readonly msg: string;
  @Field()
  readonly id: string;
  @Field()
  readonly email: string;
  @Field()
  readonly role: Role;
}
