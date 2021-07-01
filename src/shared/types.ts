import { registerEnumType } from "@nestjs/graphql";

export enum currency {
    TND = "TND",
    AUD = "AUD",
    USD = "USD"
}

registerEnumType(currency, {
    name: 'currency',
});
