import { Router, Response, Request } from "express";

import { CreateUserController } from './controllers/User/CreateUserController'
import { AuthUserController } from './controllers/User/AuthUserController'
import { DetailUserController } from "./controllers/User/DetailUserController";

import { isAuthenticated } from "./middlewares/isAuthenticated";

const router = Router();

router.post('/users', new CreateUserController().handle)
router.post('/session', new AuthUserController().handle)
router.get('/me', isAuthenticated, new DetailUserController().handle)

export { router }