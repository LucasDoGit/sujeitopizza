import { Router, Response, Request } from "express";

import { CreateUserController } from './controllers/User/CreateUserController'

const router = Router();

router.post('/users', new CreateUserController().handle)

export { router }