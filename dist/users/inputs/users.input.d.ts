export declare class User_type {
    readonly name: string;
    readonly email: string;
    readonly password?: string;
    readonly inCome?: number;
}
export declare class UpdateUserInput {
    readonly name?: string;
    readonly email?: string;
    readonly password: string;
    readonly inCome?: number;
}
export declare class updateUserPassword {
    readonly password: string;
}
