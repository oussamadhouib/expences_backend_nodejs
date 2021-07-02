/// <reference types="mongoose" />
import { ExpenceService } from './expence.service';
import { CreateExpenceInput } from './dto/create-expence.input';
import { UpdateExpenceInput } from './dto/update-expence.input';
export declare class ExpenceResolver {
    private readonly expenceService;
    constructor(expenceService: ExpenceService);
    createExpence(createExpenceInput: CreateExpenceInput): Promise<import("./schema/expence.schema").Expence & import("mongoose").Document<any, any>>;
    findAll(): string;
    findOne(id: number): string;
    updateExpence(updateExpenceInput: UpdateExpenceInput): string;
    removeExpence(id: number): string;
}
