import { createContext } from 'react';
import { Filters } from '../types/filter.type';

export type FilterContextType = {
    filter: Filters;
    setFilter: React.Dispatch<React.SetStateAction<Filters>>;
}

export const FilterContext = createContext<FilterContextType>({} as FilterContextType);