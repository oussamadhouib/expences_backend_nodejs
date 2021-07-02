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
exports.Expence = void 0;
const graphql_1 = require("@nestjs/graphql");
const types_1 = require("../../shared/types");
let Expence = class Expence {
};
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], Expence.prototype, "name", void 0);
__decorate([
    graphql_1.Field((type) => types_1.currency),
    __metadata("design:type", String)
], Expence.prototype, "currency", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", Number)
], Expence.prototype, "price", void 0);
__decorate([
    graphql_1.Field((type) => String, { nullable: true }),
    __metadata("design:type", String)
], Expence.prototype, "userId", void 0);
__decorate([
    graphql_1.Field((type) => String, { nullable: true }),
    __metadata("design:type", String)
], Expence.prototype, "wallet", void 0);
__decorate([
    graphql_1.Field((type) => [String], { nullable: true }),
    __metadata("design:type", Array)
], Expence.prototype, "receipt", void 0);
Expence = __decorate([
    graphql_1.ObjectType()
], Expence);
exports.Expence = Expence;
//# sourceMappingURL=expence.entity.js.map