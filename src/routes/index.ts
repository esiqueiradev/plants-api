import { Router } from 'express';
import { userRouter } from './userRouter.routes';

const router = Router();

router.use('/users', userRouter);

export { router };
