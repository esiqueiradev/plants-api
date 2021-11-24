import { container } from 'tsyringe';
import { Request, Response } from 'express';
import { UserService } from '../services/UserService';

export class UserController {
  constructor() {}

  async create(request: Request, response: Response) {
    const userService = container.resolve(UserService);

    const { name, email, password } = request.body;

    await userService.create({ name, email, password });

    return response.status(201).send();
  }
}
