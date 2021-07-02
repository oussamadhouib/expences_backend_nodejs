import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { AuthInput } from './inputs/auth.input';
import { JwtPayload } from './interfaces/jwt-payload.interface';
export declare class AuthService {
    private usersService;
    private jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    validateUserByPassword(loginAttempt: AuthInput): Promise<any>;
    validateUserByJwt(payload: JwtPayload): Promise<{
        id: any;
        email: any;
        success: boolean;
        expiresIn: number;
        token: string;
        msg: string;
    }>;
    createJwtPayload(user: any): {
        id: any;
        email: any;
        success: boolean;
        expiresIn: number;
        token: string;
        msg: string;
    };
}
