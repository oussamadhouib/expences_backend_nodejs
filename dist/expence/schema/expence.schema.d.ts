import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
import { currency } from '../../shared/types';
export declare type ExpenceDocument = Expence & Document;
export declare class Expence {
    name: string;
    currency: currency;
    price: number;
    receipt: string[];
    wallet: string;
    userId: string;
}
export declare const ExpenceSchema: mongoose.Schema<mongoose.Document<Expence, any>, mongoose.Model<any, any, any>, undefined, any>;
