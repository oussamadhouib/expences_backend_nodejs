import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
import { currency } from '../../shared/types';
import { Media } from '../../media/interfaces/media.interface';

export type ExpenceDocument = Expence & Document;

@Schema({ timestamps: true })
export class Expence {
  @Prop()
  name: string;
  @Prop()
  currency: currency;
  @Prop()
  price: number;
  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Media' }] })
  receipt: Media[];
}

export const ExpenceSchema = SchemaFactory.createForClass(Expence);
