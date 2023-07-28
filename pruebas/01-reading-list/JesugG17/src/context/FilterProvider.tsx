import { FC, PropsWithChildren, useState } from "react"
import { FilterContext } from "./FilterContext"
import { Filters } from "../types/filter.type";

export const FilterProvider: FC<Props> = ({ children }) => {

  const [filter, setFilter] = useState<Filters>({
    genre: 'all',
    minPages: 0
  });

  return (
    <FilterContext.Provider value={{
      filter,
      setFilter
    }}>
        { children }
    </FilterContext.Provider>
  )
}

type Props = PropsWithChildren;
