import { ProductsRepository } from "../repositories/products.repository";

export const getProducts = async () => {
  return await ProductsRepository.getAll();
};
