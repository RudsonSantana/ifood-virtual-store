import { Router } from 'express';
import { imagesController } from '../controller/ImagesController';

const imagesRoutes = Router();

// Post
imagesRoutes.post('/images', imagesController.create);

// Get
imagesRoutes.get('/images', imagesController.findAll);
imagesRoutes.get('/images/:id', imagesController.findOne);


export { imagesRoutes };