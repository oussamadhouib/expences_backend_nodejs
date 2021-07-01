import { Global, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

import { UsersService } from './users.service';
import { UserSchema } from './schemas/user.schema';
import { UsersResolver } from './UsersResolver';


@Global()
@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
    PassportModule.register({ defaultStrategy: 'jwt', session: false }),
    JwtModule.register({
      secret: process.env.SECRET_KEY,
      signOptions: {
        expiresIn: 300000,
      },
    })
  ],
  providers: [UsersResolver, UsersService],
  exports: [UsersService],
})
export class UsersModule { }
