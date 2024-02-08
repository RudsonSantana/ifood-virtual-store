import { Router } from 'express';
import { productsController } from '../controller/ProductsController';
import { validate } from './middlewares/validationMiddleware';
import { createProductSchema } from './schemas/ProductSchemas';

const productsRoutes = Router();

// Post
productsRoutes.post('/products', validate(createProductSchema), productsController.create);

// Get
productsRoutes.get('/products', productsController.findAll);


export { productsRoutes };