import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcrypt';

import { User } from './interfaces/user.interface';
import { updateUserPassword, User_type } from './inputs/users.input';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private userModel: Model<User>,
  ) { }

  async create(createUserDto: User_type): Promise<User> {
    const createdUser = new this.userModel(createUserDto);
    return createdUser.save();
  }

  async findOneByEmail(email: string): Promise<User> {
    return await this.userModel.findOne({ email: email });
  }

  async findOneById(id: string): Promise<User> {
    return await this.userModel.findOne({ _id: id });
  }

  async findUserByToken(token: string) {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    const find_user = await this.userModel.find({ email: decoded['email'] });
    // console.log(find_user[0]);

    return find_user[0];
  }

  async deletUser(id: string) {
    return this.userModel.deleteOne({ _id: id })
  }

  async findAll() {
    return this.userModel.find()
  }

  // UPDATE
  async update(token: string, updateUserPassword: updateUserPassword) {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    const oldUser = await this
      .findOneByEmail(decoded['email'])
      .then((res) => {
        return res;
      });
    if (oldUser === null) {
      throw new HttpException('Invalid Email', HttpStatus.BAD_REQUEST);
    }
    oldUser.password = updateUserPassword.password

    return oldUser.save();
  }

}
