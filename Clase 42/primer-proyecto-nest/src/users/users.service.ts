import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  users: Array<User>;

  constructor() {
    this.users = [];
  }

  create(createUserDto: CreateUserDto) {
    this.users.push(createUserDto);
    return 'user added';
  }

  findAll() {
    return this.users;
  }

  findOne(id: number) {
    return this.users.find((user) => user.id === id);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    const index = this.users.findIndex((user) => user.id === id);
    this.users[index] = updateUserDto;
    return 'user updated';
  }

  remove(id: number) {
    const index = this.users.findIndex((user) => user.id === id);
    this.users.splice(index, 1);
    return `user removed`;
  }
}
