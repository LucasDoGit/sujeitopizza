import { Router, Response, Request } from "express";
import multer from "multer";

import { isAuthenticated } from "./middlewares/isAuthenticated";

import { CreateUserController } from './controllers/User/CreateUserController'
import { AuthUserController } from './controllers/User/AuthUserController'
import { DetailUserController } from "./controllers/User/DetailUserController";

import { CreateCategoryController } from "./controllers/categorie/CreateCategoryController";
import { ListCategoryController } from "./controllers/categorie/ListCategoryController";

import { CreateProductController } from "./controllers/product/CreateProductController";

import { ListByCategoryController } from "./controllers/product/ListByCategoryController";

import { CreateOrderController } from "./controllers/order/CreateOrderController";
import { RemoveOrderController } from "./controllers/order/RemoveOrderController";

import uploadConfig from './config/multer'

const router = Router();

const upload = multer(uploadConfig.upload("./tmp"))

// -- ROUTES USER --
router.post('/users', new CreateUserController().handle)
router.post('/session', new AuthUserController().handle)
router.get('/me', isAuthenticated, new DetailUserController().handle)

// -- ROUTES CATEGORY --
router.post('/category', isAuthenticated, new CreateCategoryController().handle)
router.get('/category', isAuthenticated, new ListCategoryController().handle)

// -- ROUTES PRODUCT --
router.post('/product', isAuthenticated, upload.single('file'), new CreateProductController().handle)

// -- ROUTES FILTER PRODUCTS --
router.get('/category/product', isAuthenticated, new ListByCategoryController().handle)

// -- ROUTES ORDER --
router.post('/order', isAuthenticated, new CreateOrderController().handle)
router.delete('/order', isAuthenticated, new RemoveOrderController().handle)

export { router }