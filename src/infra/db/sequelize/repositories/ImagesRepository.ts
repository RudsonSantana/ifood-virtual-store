import { IImagesRepository, IImagesRequest, IImagesResponse } from "../../../../app/repositories/IImagesRepository";
import { ImageModel } from "../models/ImageModel";

class ImagesRespository implements IImagesRepository {
    async create(data: IImagesRequest): Promise<void> {
        await ImageModel.create({
            id: data.id,
            name: data.name,
            type: data.type,
            path: data.path,
            size: data.size
        });
    }

    async findAll(): Promise<IImagesResponse[]> {
        const images = await ImageModel.findAll();
        return images.map(item => {
            return {
                id: item.dataValues.id,
                name: item.dataValues.id,
                type: item.dataValues.type,
                path: item.dataValues.path,
                size: item.dataValues.size
            }
        });
    }

    async findOne(id: string): Promise<IImagesRequest | null> {
        const image = await ImageModel.findByPk(id);
        if (image) {
            return {
                id: image.dataValues.id,
                name: image.dataValues.name,
                type: image.dataValues.type,
                path: image.dataValues.path,
                size: image.dataValues.size
            };
        } else {
            return null;
        }
    }
}

const imagesRespository = new ImagesRespository();

export { imagesRespository }