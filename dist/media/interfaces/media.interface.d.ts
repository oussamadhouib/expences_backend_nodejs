import { Document } from 'mongoose';
export declare class Media extends Document {
    id?: string;
    fieldname: string;
    originalname: string;
    encoding: string;
    mimetype: string;
    destination: string;
    filename: string;
    path: string;
    size: number;
}
