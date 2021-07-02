import { Model } from 'mongoose';
import { User } from './interfaces/user.interface';
import { updateUserPassword, User_type } from './inputs/users.input';
export declare class UsersService {
    private userModel;
    constructor(userModel: Model<User>);
    create(createUserDto: User_type): Promise<User>;
    findOneByEmail(email: string): Promise<User>;
    findOneById(id: string): Promise<User>;
    findUserByToken(token: string): Promise<User>;
    deletUser(id: string): Promise<{
        ok?: number;
        n?: number;
    } & {
        deletedCount?: number;
    }>;
    findAll(): Promise<User[]>;
    update(token: string, updateUserPassword: updateUserPassword): Promise<User>;
}
