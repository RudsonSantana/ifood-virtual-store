export interface IImagesRequest {
  id: string;
  name: string;
  type: string;
  path: string;
  size: number
}

export interface IImagesResponse {
  id: string;
  name: string;
  type: string;
  size: number
}

export interface IImagesRepository {
  create(data: IImagesRequest): Promise<void>;
  findAll(): Promise<IImagesResponse[]>;
  findOne(id: string): Promise<IImagesResponse | null>;
}