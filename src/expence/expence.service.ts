import { Injectable } from '@nestjs/common';
import { CreateExpenceInput } from './dto/create-expence.input';
import { UpdateExpenceInput } from './dto/update-expence.input';

@Injectable()
export class ExpenceService {
  create(createExpenceInput: CreateExpenceInput) {
    return 'This action adds a new expence';
  }

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
