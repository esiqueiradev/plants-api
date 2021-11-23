import { inject } from 'tsyringe';
import { Request, Response } from 'express';
import { IUserService } from '../services/UserService';

export class UserController {
  constructor(
    @inject('UserService')
    private usersService: IUserService,
  ) {}

  async create(request: Request, response: Response) {
    const { name, email, password } = request.body;

    await this.usersService.create({ name, email, password });

    return response.status(201).send();
  }
}
