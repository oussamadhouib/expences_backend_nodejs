import { Document } from 'mongoose';
// import { PathType } from '../../product/types/product.type';

// @InterfaceType()
export class Media extends Document {
  id?: string;

  fieldname: string;

  originalname: string;

  encoding: string;

  mimetype: string;

  destination: string;

  filename: string;

  path: string;

  size: number;

  // url?: PathType;
}
