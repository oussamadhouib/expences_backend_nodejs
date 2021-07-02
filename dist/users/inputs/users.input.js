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
exports.updateUserPassword = exports.UpdateUserInput = exports.User_type = void 0;
const graphql_1 = require("@nestjs/graphql");
let User_type = class User_type {
};
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], User_type.prototype, "name", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], User_type.prototype, "email", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], User_type.prototype, "password", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    __metadata("design:type", Number)
], User_type.prototype, "inCome", void 0);
User_type = __decorate([
    graphql_1.ObjectType(),
    graphql_1.InputType('userInput')
], User_type);
exports.User_type = User_type;
let UpdateUserInput = class UpdateUserInput {
};
__decorate([
    graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], UpdateUserInput.prototype, "name", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], UpdateUserInput.prototype, "email", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], UpdateUserInput.prototype, "password", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    __metadata("design:type", Number)
], UpdateUserInput.prototype, "inCome", void 0);
UpdateUserInput = __decorate([
    graphql_1.InputType('updateUserInput')
], UpdateUserInput);
exports.UpdateUserInput = UpdateUserInput;
let updateUserPassword = class updateUserPassword {
};
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], updateUserPassword.prototype, "password", void 0);
updateUserPassword = __decorate([
    graphql_1.InputType('updateUserPassword')
], updateUserPassword);
exports.updateUserPassword = updateUserPassword;
//# sourceMappingURL=users.input.js.map