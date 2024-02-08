import z from 'zod';

export const createProductSchema = z.object({
  body: z.object({
    name: z.string({ required_error: 'Nome do produto é obrigatório' }),
    price: z.number({ required_error: 'Preço é obrigatória', invalid_type_error: 'Preço deve ser um número' }),
    id_image: z.string({required_error: 'Imagem é obrigatória', invalid_type_error: 'Imagem deve ser um número' }),
  })

});