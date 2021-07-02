"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MediaSchema = void 0;
const mongoose = require("mongoose");
exports.MediaSchema = new mongoose.Schema({
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
//# sourceMappingURL=media.schema.js.map