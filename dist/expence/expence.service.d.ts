import { Model } from 'mongoose';
import { CreateExpenceInput } from './dto/create-expence.input';
import { UpdateExpenceInput } from './dto/update-expence.input';
import { Expence } from './schema/expence.schema';
export declare class ExpenceService {
    private expenceModel;
    constructor(expenceModel: Model<Expence>);
    create(createExpenceInput: CreateExpenceInput): Promise<Expence & import("mongoose").Document<any, any>>;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateExpenceInput: UpdateExpenceInput): string;
    remove(id: number): string;
}
