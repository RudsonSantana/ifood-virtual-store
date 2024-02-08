import { v4 as uuid } from 'uuid';
import { productsRespository } from '../../infra/db/sequelize/repositories/ProductsRepository';

interface Request {
    name: string;
    price: number;
    id_image: string
}

class ProductsCreateService {
    async execute({ name, price, id_image }: Request) {
        const newProduct = {
            id: uuid(),
            name,
            price,
            id_image
        };

        await productsRespository.create(newProduct);
        return newProduct
    }
}

const productsCreateService = new ProductsCreateService();

export { productsCreateService };