import { Router, Response, Request } from "express";

import { CreateUserController } from './controllers/User/CreateUserController'
import { AuthUserController } from './controllers/User/AuthUserController'
import { DetailUserController } from "./controllers/User/DetailUserController";

import { isAuthenticated } from "./middlewares/isAuthenticated";
import { CreateCategoryController } from "./controllers/categorie/CreateCategoryController";
import { ListCategoryController } from "./controllers/categorie/ListCategoryController";

const router = Router();


// -- ROTAS DE USER --
router.post('/users', new CreateUserController().handle)
router.post('/session', new AuthUserController().handle)
router.get('/me', isAuthenticated, new DetailUserController().handle)

// -- ROTAS DE CATEGORIAS --
router.post('/category', isAuthenticated, new CreateCategoryController().handle)
router.get('/category', isAuthenticated, new ListCategoryController().handle)

export { router }