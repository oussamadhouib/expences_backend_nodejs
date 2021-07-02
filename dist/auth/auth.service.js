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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const users_service_1 = require("../users/users.service");
let AuthService = class AuthService {
    constructor(usersService, jwtService) {
        this.usersService = usersService;
        this.jwtService = jwtService;
    }
    async validateUserByPassword(loginAttempt) {
        let userToAttempt = await this.usersService.findOneByEmail(loginAttempt.email);
        return new Promise((resolve) => {
            if (!userToAttempt) {
                resolve({ success: false, msg: 'User not found' });
            }
            userToAttempt.checkPassword(loginAttempt.password, (err, isMatch) => {
                if (err)
                    resolve({
                        success: false,
                        msg: 'Unexpected error. Please try again later.',
                    });
                if (isMatch) {
                    resolve(this.createJwtPayload(userToAttempt));
                }
                else {
                    resolve({ success: false, msg: 'Wrong password' });
                }
            });
        });
    }
    async validateUserByJwt(payload) {
        let user = await this.usersService.findOneByEmail(payload.email);
        if (user) {
            return this.createJwtPayload(user);
        }
        else {
            throw new common_1.UnauthorizedException();
        }
    }
    createJwtPayload(user) {
        let data = {
            email: user.email,
            name: user.name,
        };
        let jwt = this.jwtService.sign(data);
        return {
            id: user.id,
            email: user.email,
            success: true,
            expiresIn: 360000000,
            token: jwt,
            msg: 'Login Success',
        };
    }
};
AuthService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map