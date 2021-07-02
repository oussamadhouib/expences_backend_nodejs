import { Model } from 'mongoose';
import { CreateWalletInput } from './dto/create-wallet.input';
import { UpdateWalletInput } from './dto/update-wallet.input';
import { Wallet } from './schema/wallet.schema';
export declare class WalletService {
    private walletModel;
    constructor(walletModel: Model<Wallet>);
    create(createWalletInput: CreateWalletInput): Promise<Wallet & import("mongoose").Document<any, any>>;
    findAll(): Promise<(Wallet & import("mongoose").Document<any, any>)[]>;
    findOne(id: number): string;
    update(id: number, updateWalletInput: UpdateWalletInput): string;
    remove(id: number): string;
}
