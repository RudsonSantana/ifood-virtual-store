import { productsRespository } from "../../infra/db/sequelize/repositories/ProductsRepository";

class ProductsFindAllService {
    async execute() {
        const products = await productsRespository.findAll();
        return products;
    }
}

const productsFindAllService = new ProductsFindAllService();

export { productsFindAllService }