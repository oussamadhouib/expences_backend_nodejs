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
exports.CreateMediaDto = void 0;
const graphql_1 = require("@nestjs/graphql");
let CreateMediaDto = class CreateMediaDto {
};
__decorate([
    graphql_1.Field(() => graphql_1.ID),
    __metadata("design:type", String)
], CreateMediaDto.prototype, "_id", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], CreateMediaDto.prototype, "fieldname", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], CreateMediaDto.prototype, "originalname", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], CreateMediaDto.prototype, "encoding", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], CreateMediaDto.prototype, "mimetype", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], CreateMediaDto.prototype, "destination", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], CreateMediaDto.prototype, "filename", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], CreateMediaDto.prototype, "path", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    __metadata("design:type", Number)
], CreateMediaDto.prototype, "size", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], CreateMediaDto.prototype, "name", void 0);
CreateMediaDto = __decorate([
    graphql_1.ObjectType(),
    graphql_1.InputType("Media_Input")
], CreateMediaDto);
exports.CreateMediaDto = CreateMediaDto;
//# sourceMappingURL=create.media.js.map