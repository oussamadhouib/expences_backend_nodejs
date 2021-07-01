import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { tokenResponse } from '../users/dto/login-user.dto';
import { AuthService } from './auth.service';
import { AuthInput } from './inputs/auth.input';

@Resolver()
export class AuthResolver {
  constructor(private readonly AuthService: AuthService) { }

  @Mutation(() => tokenResponse)
  async login(@Args('input') input: AuthInput) {
    return this.AuthService.validateUserByPassword(input);
  }
}
