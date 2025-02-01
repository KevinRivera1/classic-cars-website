import { productsItems } from "@/data/products/products.data";
import type { IProduct } from "../domain/products/products.entity";

export const ProductsRepository = {
    getAll: async (): Promise<IProduct[]> => Promise.resolve(productsItems),
};
