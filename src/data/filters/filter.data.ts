import type { IFilter } from "@/core/domain/filter/filter.entity";

export const filterItems: IFilter[] = [
  {
    name: "All",
    link: "/all",
  },
  {
    name: "Browse by Category",
    link: "/browse-by-category",
    subItems: [
      { name: "Subcategory 1.1", link: "/category-1/sub-1" },
      { name: "Subcategory 1.2", link: "/category-1/sub-2" },
    ],
  },
  {
    name: "Brand",
    link: "/brand",
    subItems: [
      { name: "Subcategory 2.1", link: "/category-2/sub-1" },
      { name: "Subcategory 2.2", link: "/category-2/sub-2" },
    ],
  },
  {
    name: "Country",
    link: "/country",
    subItems: [
      { name: "Subcategory 3.1", link: "/country/sub-1" },
      { name: "Subcategory 3.2", link: "/country/sub-2" },
    ],
  },
];
