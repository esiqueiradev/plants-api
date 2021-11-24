import { UserController } from './../app/controllers/UserController';
import { Router } from "express";
import { createUserValidator } from '../app/validators/userValidator';

const userRouter = Router();
const userController = new UserController();

userRouter.post('/', createUserValidator, userController.create);

export {  userRouter };
