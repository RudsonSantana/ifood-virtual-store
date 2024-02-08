import { imagesRespository } from "../../infra/db/sequelize/repositories/ImagesRepository";

class ImagesFindAllService {
    async execute() {
        const images = await imagesRespository.findAll();
        return images;
    }
}

const imagesFindAllService = new ImagesFindAllService();

export { imagesFindAllService }