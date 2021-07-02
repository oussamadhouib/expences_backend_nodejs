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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const jwt = require("jsonwebtoken");
let UsersService = class UsersService {
    constructor(userModel) {
        this.userModel = userModel;
    }
    async create(createUserDto) {
        const createdUser = new this.userModel(createUserDto);
        return createdUser.save();
    }
    async findOneByEmail(email) {
        return await this.userModel.findOne({ email: email });
    }
    async findOneById(id) {
        return await this.userModel.findOne({ _id: id });
    }
    async findUserByToken(token) {
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        const find_user = await this.userModel.find({ email: decoded['email'] });
        return find_user[0];
    }
    async deletUser(id) {
        return this.userModel.deleteOne({ _id: id });
    }
    async findAll() {
        return this.userModel.find();
    }
    async update(token, updateUserPassword) {
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        const oldUser = await this
            .findOneByEmail(decoded['email'])
            .then((res) => {
            return res;
        });
        if (oldUser === null) {
            throw new common_1.HttpException('Invalid Email', common_1.HttpStatus.BAD_REQUEST);
        }
        oldUser.password = updateUserPassword.password;
        return oldUser.save();
    }
};
UsersService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel('User')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map