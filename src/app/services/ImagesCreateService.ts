import { v4 as uuid } from 'uuid';
import { imagesRespository } from '../../infra/db/sequelize/repositories/ImagesRepository';

interface Request {
    name: string;
    type: string;
    path: string;
    size: number
}

class ImagesCreateService {
    async execute({ name, type, path, size }: Request) {
        const newImage = {
            id: uuid(),
            name,
            type,
            path,
            size
        };

        await imagesRespository.create(newImage);
        return newImage
    }
}

const imagesCreateService = new ImagesCreateService();

export { imagesCreateService };