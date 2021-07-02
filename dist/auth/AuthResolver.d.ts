import { AuthService } from './auth.service';
import { AuthInput } from './inputs/auth.input';
export declare class AuthResolver {
    private readonly AuthService;
    constructor(AuthService: AuthService);
    login(input: AuthInput): Promise<any>;
}
