import { Module } from '@nestjs/common';
import { ExpenceService } from './expence.service';
import { ExpenceResolver } from './expence.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { ExpenceSchema } from './schema/expence.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Expence', schema: ExpenceSchema }]),
  ],
  providers: [ExpenceResolver, ExpenceService]
})
export class ExpenceModule { }
