import { Request, Response } from "express";
import { productsCreateService } from "../services/ProductsCreateService";
import { productsFindAllService } from "../services/ProductsFindAllService";

class ProductsController {
    async create(req: Request, res: Response) {
        const { name, price, id_image } = req.body;
        const product = await productsCreateService.execute({ name, price, id_image });
        res.status(201).send({product});
    }

    async findAll(req: Request, res: Response) {
        const products = await productsFindAllService.execute();
        res.status(200).send(products);
    }
    
}

const productsController = new ProductsController();

export { productsController }