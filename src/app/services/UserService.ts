import { inject, injectable } from "tsyringe";
import { hash } from 'bcryptjs';

import { UsersRepository } from "../repositories/UserRepository";
import { CreateUserDTO } from "../dto/CreateUser.dto";
import { User } from "../entities/User";

export interface IUserService {
  create(data: CreateUserDTO): Promise<User>;
}

@injectable()
export class UserService implements IUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: UsersRepository,
  ) {}

  async create({ name, email, password }: CreateUserDTO) {
    const passwordHash = await hash(password, 8);

    const user = await this.usersRepository.create({
      email,
      name,
      password: passwordHash,
    });

    return user;
  }
}
