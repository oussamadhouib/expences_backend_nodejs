import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';


export type WalletDocument = Wallet & Document;

@Schema({ timestamps: true })
export class Wallet {
    @Prop()
    name: string;
}

export const WalletSchema = SchemaFactory.createForClass(Wallet);
