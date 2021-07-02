import { currency } from '../../shared/types';
export declare class CreateExpenceInput {
    name: string;
    currency: currency;
    price: number;
    userId: string;
    wallet: string;
    receipt: string[];
}
