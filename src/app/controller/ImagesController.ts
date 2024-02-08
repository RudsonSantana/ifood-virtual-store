import { Request, Response } from "express";
import { imagesCreateService } from "../services/ImagesCreateService";
import { imagesFindAllService } from "../services/ImagesFindAllService";
import { imagesFindOneService } from "../services/ImagesFindOneService";

class ImagesController {
    async create(req: Request, res: Response) {
        const { name, type, path, size } = req.body;
        const image = await imagesCreateService.execute({ name, type, path, size });
        res.status(201).send({ image });
    }

    async findAll(req: Request, res: Response) {
        const images = await imagesFindAllService.execute();
        res.status(200).send(images);
    }

    async findOne(req: Request, res: Response) {
        const { id } = req.params;
        const images = await imagesFindOneService.execute(id);
        res.status(200).send(images);
    }
}

const imagesController = new ImagesController();

export { imagesController }