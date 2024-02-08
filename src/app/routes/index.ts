import { Router } from "express";
import { productsRoutes } from "./products.routes";
import { imagesRoutes } from "./images.routes";

const routes = Router();

routes.use(productsRoutes);
routes.use(imagesRoutes);

export { routes }