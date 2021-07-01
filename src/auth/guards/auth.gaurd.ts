import {
  Injectable,
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import * as jwt from 'jsonwebtoken';

import { UsersService } from '../../users/users.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private usersService: UsersService) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const ctx = GqlExecutionContext.create(context).getContext();

    if (!ctx.req.headers.authorization) {
      return false;
    }
    ctx.user = await this.validateToken(ctx.req.headers.authorization);

    return true;
  }

  async validateToken(auth: string) {
    const token = auth.split(' ')[1].toString();
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    const find_user = await this.usersService
      .findOneByEmail(decoded['email'])
      .then((res) => {
        return res;
      });

    if (find_user === null) {
      throw new HttpException('User Not Found', HttpStatus.UNAUTHORIZED);
    }

    if (auth.split(' ')[0] !== 'Bearer') {
      throw new HttpException('Invalid token', HttpStatus.UNAUTHORIZED);
    }
    try {
      return decoded;
    } catch (err) {
      const message = 'Token error: ' + (err.message || err.name);
      throw new HttpException(message, HttpStatus.UNAUTHORIZED);
    }
  }
}
