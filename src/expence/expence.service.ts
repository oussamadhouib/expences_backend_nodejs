import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateExpenceInput } from './dto/create-expence.input';
import { UpdateExpenceInput } from './dto/update-expence.input';
import { Expence } from './schema/expence.schema';

@Injectable()
export class ExpenceService {
  constructor(@InjectModel('Expence') private expenceModel: Model<Expence>,
  ) { }

  async create(createExpenceInput: CreateExpenceInput) {
    const createdExpence = new this.expenceModel(createExpenceInput);
    return createdExpence.save();
  }


  // create(createExpenceInput: CreateExpenceInput) {
  //   return 'This action adds a new expence';
  // }

  findAll() {
    return `This action returns all expence`;
  }

  findOne(id: number) {
    return `This action returns a #${id} expence`;
  }

  update(id: number, updateExpenceInput: UpdateExpenceInput) {
    return `This action updates a #${id} expence`;
  }

  remove(id: number) {
    return `This action removes a #${id} expence`;
  }
}
