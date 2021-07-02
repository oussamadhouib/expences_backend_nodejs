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
exports.tokenResponse = exports.LoginType = void 0;
const graphql_1 = require("@nestjs/graphql");
let LoginType = class LoginType {
};
__decorate([
    graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], LoginType.prototype, "email", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], LoginType.prototype, "password", void 0);
LoginType = __decorate([
    graphql_1.ObjectType()
], LoginType);
exports.LoginType = LoginType;
let tokenResponse = class tokenResponse {
};
__decorate([
    graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], tokenResponse.prototype, "expiresIn", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], tokenResponse.prototype, "token", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    __metadata("design:type", Boolean)
], tokenResponse.prototype, "success", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], tokenResponse.prototype, "msg", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], tokenResponse.prototype, "id", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], tokenResponse.prototype, "email", void 0);
tokenResponse = __decorate([
    graphql_1.ObjectType()
], tokenResponse);
exports.tokenResponse = tokenResponse;
//# sourceMappingURL=login-user.dto.js.map