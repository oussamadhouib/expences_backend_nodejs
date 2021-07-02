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
exports.UpdateExpenceInput = void 0;
const create_expence_input_1 = require("./create-expence.input");
const graphql_1 = require("@nestjs/graphql");
let UpdateExpenceInput = class UpdateExpenceInput extends graphql_1.PartialType(create_expence_input_1.CreateExpenceInput) {
};
__decorate([
    graphql_1.Field(() => graphql_1.Int),
    __metadata("design:type", Number)
], UpdateExpenceInput.prototype, "id", void 0);
UpdateExpenceInput = __decorate([
    graphql_1.InputType()
], UpdateExpenceInput);
exports.UpdateExpenceInput = UpdateExpenceInput;
//# sourceMappingURL=update-expence.input.js.map