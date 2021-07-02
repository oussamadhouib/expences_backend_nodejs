"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpenceSchema = exports.Expence = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose = require("mongoose");
const types_1 = require("../../shared/types");
let Expence = class Expence {
};
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Expence.prototype, "name", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Expence.prototype, "currency", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Number)
], Expence.prototype, "price", void 0);
__decorate([
    mongoose_1.Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Media' }] }),
    __metadata("design:type", Array)
], Expence.prototype, "receipt", void 0);
__decorate([
    mongoose_1.Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Wallet' }),
    __metadata("design:type", String)
], Expence.prototype, "wallet", void 0);
__decorate([
    mongoose_1.Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' }),
    __metadata("design:type", String)
], Expence.prototype, "userId", void 0);
Expence = __decorate([
    mongoose_1.Schema({ timestamps: true })
], Expence);
exports.Expence = Expence;
exports.ExpenceSchema = mongoose_1.SchemaFactory.createForClass(Expence);
//# sourceMappingURL=expence.schema.js.map