import type { IProduct } from "@/core/domain/products/products.entity";
import ImageRoyce from "../../assets/car-1.webp";
import ImageMGB from "../../assets/car-2.webp";
import ImageFerrari from "../../assets/car-3.webp";

export const productsItems: IProduct[] = [
  {
    image: ImageRoyce.src,
    name: "Rolls-Royce silver",
    subtitle: "Cloud III Rear",
    description: "Production: 1955-1966",
    price: "$ 240.000",
  },
  {
    image: ImageMGB.src,
    name: "MG MGB",
    description: "Production: 1962-1980",
    price: "$ 234.000",
  },
  {
    image: ImageFerrari.src,
    name: "Ferrari 250 GT LWB",
    subtitle: "California Spyder",
    description: "Production: 1957-1963",
    price: "$ 735.000",
  },
];
