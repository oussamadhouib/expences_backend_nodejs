import { Document } from 'mongoose';
export declare type WalletDocument = Wallet & Document;
export declare class Wallet {
    name: string;
}
export declare const WalletSchema: import("mongoose").Schema<Document<Wallet, any>, import("mongoose").Model<any, any, any>, undefined, any>;
