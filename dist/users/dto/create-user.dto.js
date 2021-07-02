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
exports.UserType = exports.SuccesUserType = void 0;
const graphql_1 = require("@nestjs/graphql");
let SuccesUserType = class SuccesUserType {
};
__decorate([
    graphql_1.Field(),
    __metadata("design:type", Boolean)
], SuccesUserType.prototype, "Success", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], SuccesUserType.prototype, "msg", void 0);
SuccesUserType = __decorate([
    graphql_1.ObjectType()
], SuccesUserType);
exports.SuccesUserType = SuccesUserType;
let UserType = class UserType {
};
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], UserType.prototype, "_id", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], UserType.prototype, "email", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], UserType.prototype, "name", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    __metadata("design:type", Number)
], UserType.prototype, "inCome", void 0);
UserType = __decorate([
    graphql_1.ObjectType()
], UserType);
exports.UserType = UserType;
//# sourceMappingURL=create-user.dto.js.map