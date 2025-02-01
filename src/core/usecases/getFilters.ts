import { FilterRepository } from "../repositories/filter.repository";

export const getFilters = async () => {
    return await FilterRepository.getAll();
}