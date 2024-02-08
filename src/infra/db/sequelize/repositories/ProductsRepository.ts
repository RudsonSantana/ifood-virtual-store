import { IProductsRequest, IProductsRepository, IProductsResponse } from "../../../../app/repositories/IProductsRepository";
import { ImageModel } from "../models/ImageModel";
import { ProductModel } from "../models/ProductModel";

class ProductsRespository implements IProductsRepository {
    async create(data: IProductsRequest): Promise<void> {
        const product = await ProductModel.create({
            id: data.id,
            name: data.name,
            price: data.price,
            id_image: data.id_image
        });
    }

    async findAll(): Promise<IProductsResponse[]> {
        const products = await ProductModel.findAll({
            include: [
                {
                    model: ImageModel,
                    attributes: {
                        exclude: ['path']
                    }
                }
            ]
        });
        return products.map(item => {
            return {
                id: item.dataValues.id,
                name: item.dataValues.name,
                price: item.dataValues.price,
                id_image: item.dataValues.image
            }
        });
    }
}

const productsRespository = new ProductsRespository();

export { productsRespository }