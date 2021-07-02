import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class WalletInput {
    @Field(() => String)
    name: string;
}