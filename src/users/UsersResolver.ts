import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';
import { Jwtdata } from 'src/auth/interfaces/jwt-payload.interface';
// import { MailService } from '../mail/mail.service';
import { JwtService } from '@nestjs/jwt';

import { SuccesUserType, UserType } from './dto/create-user.dto';
import { updateUserPassword, User_type } from './inputs/users.input';
import { UsersService } from './users.service';

@Resolver()
export class UsersResolver {
  private pubSub = new PubSub();
  constructor(private readonly UsersService: UsersService,
    private jwtService: JwtService,
  ) {
    this.pubSub = new PubSub();
  }

  @Query(() => [UserType])
  async getUsers() {
    return this.UsersService.findAll();
  }

  @Query(() => UserType)
  async getUser(@Args('id') id: string) {
    return this.UsersService.findOneById(id);
  }

  @Query(() => UserType)
  async findUserByToken(@Args('token') token: string) {
    return this.UsersService.findUserByToken(token);
  }

  @Mutation(() => SuccesUserType)
  async createUser(@Args('input') input: User_type) {
    const user_create = this.UsersService.findOneByEmail(input.email).then(
      (res) => {
        if (res === null) {
          this.UsersService.create(input);
          return { Success: true, msg: 'User Created Successfully' };
        } else {
          return { Success: false, msg: 'User Exist !!!' };
        }
      },
    );

    return user_create;
  }

  @Mutation(() => SuccesUserType)
  async deleteUser(@Args('id') id: string) {
    const User = await this.UsersService.findOneById(id);
    if (User !== null) {
      await this.pubSub
        .publish('userDeleted', { userDeleted: User })
        .then((res) => {
          console.log(res);
        });
      // console.log(User);
    }

    return this.UsersService.deletUser(id)
      .then((res) => {
        return { Success: true, msg: 'User Deleted Successfully' };
      })
      .catch((err) => {
        return { Success: false, msg: err };
      });
  }

  @Subscription(() => UserType, {
    filter: (payload) => payload,
  })
  userDeleted() {
    return this.pubSub.asyncIterator('userDeleted');
  }




  // UPDATE PASSWORD MUTUATION
  @Mutation(() => SuccesUserType, { name: 'updatePassword' })
  async updatePassword(@Args('token') token: string, @Args('updateUserPassword') updateUserPassword: updateUserPassword) {
    const result = await this.UsersService.update(token, updateUserPassword).then((res) => {
      return { Success: true, msg: 'password updated' }
    })
      .catch((err) => {
        return { Success: false, msg: err };
      })
    return result
  }
}
