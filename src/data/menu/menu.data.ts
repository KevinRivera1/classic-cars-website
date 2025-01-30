import type { IMenuNav } from "@/core/domain/menu/menu.entity";

export const menuItems: IMenuNav[] = [
  {
    name: "Home",
    url: "/",
    ariaLabel: "Ir a la página de inicio",
  },
  {
    name: "Collection",
    url: "/collection",
    ariaLabel: "Ir a la colección de productos",
  },
  {
    name: "Service",
    url: "/service",
    ariaLabel: "Ir a la página de servicios",
  },
  {
    name: "About",
    url: "/about",
    ariaLabel: "Ir a la página de información",
  },
];
