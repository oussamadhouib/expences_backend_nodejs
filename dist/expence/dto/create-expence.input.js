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
exports.CreateExpenceInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const types_1 = require("../../shared/types");
let CreateExpenceInput = class CreateExpenceInput {
};
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], CreateExpenceInput.prototype, "name", void 0);
__decorate([
    graphql_1.Field((type) => types_1.currency),
    __metadata("design:type", String)
], CreateExpenceInput.prototype, "currency", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", Number)
], CreateExpenceInput.prototype, "price", void 0);
__decorate([
    graphql_1.Field((type) => String, { nullable: true }),
    __metadata("design:type", String)
], CreateExpenceInput.prototype, "userId", void 0);
__decorate([
    graphql_1.Field((type) => String, { nullable: true }),
    __metadata("design:type", String)
], CreateExpenceInput.prototype, "wallet", void 0);
__decorate([
    graphql_1.Field((type) => [String], { nullable: true }),
    __metadata("design:type", Array)
], CreateExpenceInput.prototype, "receipt", void 0);
CreateExpenceInput = __decorate([
    graphql_1.InputType()
], CreateExpenceInput);
exports.CreateExpenceInput = CreateExpenceInput;
//# sourceMappingURL=create-expence.input.js.map