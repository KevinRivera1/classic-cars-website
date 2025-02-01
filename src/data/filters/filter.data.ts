import type { IFilter } from "@/core/domain/filter/filter.entity";

export const filterItems: IFilter[] = [
  {
    name: "All",
    link: "/all",
  },
  {
    name: "Category 1",
    link: "/category-1",
    subItems: [
      { name: "Subcategory 1.1", link: "/category-1/sub-1" },
      { name: "Subcategory 1.2", link: "/category-1/sub-2" },
    ],
  },
  {
    name: "Category 2",
    link: "/category-2",
    subItems: [
      { name: "Subcategory 2.1", link: "/category-2/sub-1" },
      { name: "Subcategory 2.2", link: "/category-2/sub-2" },
    ],
  },
  {
    name: "Category 3",
    link: "/category-3",
  },
  {
    name: "Category 4",
    link: "/category-4",
  },
];

