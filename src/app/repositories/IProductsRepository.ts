export interface IProductsRequest {
  id: string;
  name: string;
  price: number;
  id_image: string

}

export interface IProductsResponse {
  id: string;
  name: string;
  price: number;
  id_image: string
}

export interface IProductsRepository {
  create(data: IProductsRequest): Promise<void>;
  findAll(): Promise<IProductsResponse[]>;
}