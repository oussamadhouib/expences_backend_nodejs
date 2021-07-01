import * as mongoose from 'mongoose';

export const MediaSchema = new mongoose.Schema({
  fieldname: String,

  originalname: String,

  encoding: String,

  mimetype: String,

  destination: String,

  filename: String,

  path: String,

  size: Number,
  url: {},
});
