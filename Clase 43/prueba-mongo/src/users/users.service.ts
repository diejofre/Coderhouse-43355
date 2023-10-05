import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User, UsersDocument } from './entities/user.entity';
import { Model, Types } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private usersModel: Model<UsersDocument>,
  ) {}

  create(createUserDto: CreateUserDto) {
    return this.usersModel.create(createUserDto);
  }

  findAll() {
    return this.usersModel.find();
  }

  findOne(id: Types.ObjectId) {
    return this.usersModel.findById(id);
  }

  update(id: Types.ObjectId, updateUserDto: UpdateUserDto) {
    return this.usersModel.findByIdAndUpdate(id, updateUserDto);
  }

  remove(id: Types.ObjectId) {
    return this.usersModel.findByIdAndDelete(id);
  }
}
