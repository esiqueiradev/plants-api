import { container } from 'tsyringe';
import { IUsersRepository, UsersRepository } from './../../app/repositories/UserRepository';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository
);
