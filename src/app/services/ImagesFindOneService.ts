import { imagesRespository } from "../../infra/db/sequelize/repositories/ImagesRepository";

class ImagesFindOneService {
    async execute(id: string) {
        const image = await imagesRespository.findOne(id);
        return image;
    }
}

const imagesFindOneService = new ImagesFindOneService();

export { imagesFindOneService }