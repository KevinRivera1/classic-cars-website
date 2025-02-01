import { filterItems } from "@/data/filters/filter.data";
import type { IFilter } from "../domain/filter/filter.entity";

export const FilterRepository = {
  getAll: async (): Promise<IFilter[]> => Promise.resolve(filterItems),
};
