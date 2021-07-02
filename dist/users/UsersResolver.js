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
exports.UsersResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_subscriptions_1 = require("graphql-subscriptions");
const jwt_payload_interface_1 = require("../auth/interfaces/jwt-payload.interface");
const jwt_1 = require("@nestjs/jwt");
const create_user_dto_1 = require("./dto/create-user.dto");
const users_input_1 = require("./inputs/users.input");
const users_service_1 = require("./users.service");
let UsersResolver = class UsersResolver {
    constructor(UsersService, jwtService) {
        this.UsersService = UsersService;
        this.jwtService = jwtService;
        this.pubSub = new graphql_subscriptions_1.PubSub();
        this.pubSub = new graphql_subscriptions_1.PubSub();
    }
    async getUsers() {
        return this.UsersService.findAll();
    }
    async getUser(id) {
        return this.UsersService.findOneById(id);
    }
    async findUserByToken(token) {
        return this.UsersService.findUserByToken(token);
    }
    async createUser(input) {
        const user_create = this.UsersService.findOneByEmail(input.email).then((res) => {
            if (res === null) {
                this.UsersService.create(input);
                return { Success: true, msg: 'User Created Successfully' };
            }
            else {
                return { Success: false, msg: 'User Exist !!!' };
            }
        });
        return user_create;
    }
    async deleteUser(id) {
        const User = await this.UsersService.findOneById(id);
        if (User !== null) {
            await this.pubSub
                .publish('userDeleted', { userDeleted: User })
                .then((res) => {
                console.log(res);
            });
        }
        return this.UsersService.deletUser(id)
            .then((res) => {
            return { Success: true, msg: 'User Deleted Successfully' };
        })
            .catch((err) => {
            return { Success: false, msg: err };
        });
    }
    userDeleted() {
        return this.pubSub.asyncIterator('userDeleted');
    }
    async updatePassword(token, updateUserPassword) {
        const result = await this.UsersService.update(token, updateUserPassword).then((res) => {
            return { Success: true, msg: 'password updated' };
        })
            .catch((err) => {
            return { Success: false, msg: err };
        });
        return result;
    }
};
__decorate([
    graphql_1.Query(() => [create_user_dto_1.UserType]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UsersResolver.prototype, "getUsers", null);
__decorate([
    graphql_1.Query(() => create_user_dto_1.UserType),
    __param(0, graphql_1.Args('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsersResolver.prototype, "getUser", null);
__decorate([
    graphql_1.Query(() => create_user_dto_1.UserType),
    __param(0, graphql_1.Args('token')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsersResolver.prototype, "findUserByToken", null);
__decorate([
    graphql_1.Mutation(() => create_user_dto_1.SuccesUserType),
    __param(0, graphql_1.Args('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [users_input_1.User_type]),
    __metadata("design:returntype", Promise)
], UsersResolver.prototype, "createUser", null);
__decorate([
    graphql_1.Mutation(() => create_user_dto_1.SuccesUserType),
    __param(0, graphql_1.Args('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsersResolver.prototype, "deleteUser", null);
__decorate([
    graphql_1.Subscription(() => create_user_dto_1.UserType, {
        filter: (payload) => payload,
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UsersResolver.prototype, "userDeleted", null);
__decorate([
    graphql_1.Mutation(() => create_user_dto_1.SuccesUserType, { name: 'updatePassword' }),
    __param(0, graphql_1.Args('token')),
    __param(1, graphql_1.Args('updateUserPassword')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, users_input_1.updateUserPassword]),
    __metadata("design:returntype", Promise)
], UsersResolver.prototype, "updatePassword", null);
UsersResolver = __decorate([
    graphql_1.Resolver(),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        jwt_1.JwtService])
], UsersResolver);
exports.UsersResolver = UsersResolver;
//# sourceMappingURL=UsersResolver.js.map