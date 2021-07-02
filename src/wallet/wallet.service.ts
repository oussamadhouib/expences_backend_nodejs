import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateWalletInput } from './dto/create-wallet.input';
import { UpdateWalletInput } from './dto/update-wallet.input';
import { Wallet } from './schema/wallet.schema';

@Injectable()
export class WalletService {
  constructor(@InjectModel('Wallet') private walletModel: Model<Wallet>,
  ) { }

  async create(createWalletInput: CreateWalletInput) {
    const createdWallet = new this.walletModel(createWalletInput);
    return createdWallet.save();
  }

  async findAll() {
    return this.walletModel.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} wallet`;
  }

  update(id: number, updateWalletInput: UpdateWalletInput) {
    return `This action updates a #${id} wallet`;
  }

  remove(id: number) {
    return `This action removes a #${id} wallet`;
  }
}
