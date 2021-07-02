import { Module } from '@nestjs/common';
import { WalletService } from './wallet.service';
import { WalletResolver } from './wallet.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { WalletSchema } from './schema/wallet.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Wallet', schema: WalletSchema }]),
  ],
  providers: [WalletResolver, WalletService]
})
export class WalletModule { }
