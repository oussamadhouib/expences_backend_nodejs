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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpenceResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const expence_service_1 = require("./expence.service");
const expence_entity_1 = require("./entities/expence.entity");
const create_expence_input_1 = require("./dto/create-expence.input");
const update_expence_input_1 = require("./dto/update-expence.input");
let ExpenceResolver = class ExpenceResolver {
    constructor(expenceService) {
        this.expenceService = expenceService;
    }
    createExpence(createExpenceInput) {
        return this.expenceService.create(createExpenceInput);
    }
    findAll() {
        return this.expenceService.findAll();
    }
    findOne(id) {
        return this.expenceService.findOne(id);
    }
    updateExpence(updateExpenceInput) {
        return this.expenceService.update(updateExpenceInput.id, updateExpenceInput);
    }
    removeExpence(id) {
        return this.expenceService.remove(id);
    }
};
__decorate([
    graphql_1.Mutation(() => expence_entity_1.Expence),
    __param(0, graphql_1.Args('createExpenceInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_expence_input_1.CreateExpenceInput]),
    __metadata("design:returntype", void 0)
], ExpenceResolver.prototype, "createExpence", null);
__decorate([
    graphql_1.Query(() => [expence_entity_1.Expence], { name: 'expence' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ExpenceResolver.prototype, "findAll", null);
__decorate([
    graphql_1.Query(() => expence_entity_1.Expence, { name: 'expence' }),
    __param(0, graphql_1.Args('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ExpenceResolver.prototype, "findOne", null);
__decorate([
    graphql_1.Mutation(() => expence_entity_1.Expence),
    __param(0, graphql_1.Args('updateExpenceInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_expence_input_1.UpdateExpenceInput]),
    __metadata("design:returntype", void 0)
], ExpenceResolver.prototype, "updateExpence", null);
__decorate([
    graphql_1.Mutation(() => expence_entity_1.Expence),
    __param(0, graphql_1.Args('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ExpenceResolver.prototype, "removeExpence", null);
ExpenceResolver = __decorate([
    graphql_1.Resolver(() => expence_entity_1.Expence),
    __metadata("design:paramtypes", [expence_service_1.ExpenceService])
], ExpenceResolver);
exports.ExpenceResolver = ExpenceResolver;
//# sourceMappingURL=expence.resolver.js.map