import { UserController } from './../app/controllers/UserController';
import { Router } from "express";

const userRouter = Router();
const userController = new UserController();

userRouter.post('/', userController.create);

export {  userRouter };
