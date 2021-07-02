import { JwtService } from '@nestjs/jwt';
import { updateUserPassword, User_type } from './inputs/users.input';
import { UsersService } from './users.service';
export declare class UsersResolver {
    private readonly UsersService;
    private jwtService;
    private pubSub;
    constructor(UsersService: UsersService, jwtService: JwtService);
    getUsers(): Promise<import("./interfaces/user.interface").User[]>;
    getUser(id: string): Promise<import("./interfaces/user.interface").User>;
    findUserByToken(token: string): Promise<import("./interfaces/user.interface").User>;
    createUser(input: User_type): Promise<{
        Success: boolean;
        msg: string;
    }>;
    deleteUser(id: string): Promise<{
        Success: boolean;
        msg: string;
    } | {
        Success: boolean;
        msg: any;
    }>;
    userDeleted(): AsyncIterator<unknown, any, undefined>;
    updatePassword(token: string, updateUserPassword: updateUserPassword): Promise<{
        Success: boolean;
        msg: string;
    } | {
        Success: boolean;
        msg: any;
    }>;
}
