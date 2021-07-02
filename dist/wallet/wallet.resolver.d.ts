/// <reference types="mongoose" />
import { WalletService } from './wallet.service';
import { CreateWalletInput } from './dto/create-wallet.input';
import { UpdateWalletInput } from './dto/update-wallet.input';
export declare class WalletResolver {
    private readonly walletService;
    constructor(walletService: WalletService);
    createWallet(createWalletInput: CreateWalletInput): Promise<import("./schema/wallet.schema").Wallet & import("mongoose").Document<any, any>>;
    findAll(): Promise<(import("./schema/wallet.schema").Wallet & import("mongoose").Document<any, any>)[]>;
    findOne(id: number): string;
    updateWallet(updateWalletInput: UpdateWalletInput): string;
    removeWallet(id: number): string;
}
