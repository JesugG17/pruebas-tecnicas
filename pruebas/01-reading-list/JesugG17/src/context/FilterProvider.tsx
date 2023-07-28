import { FC, PropsWithChildren } from "react"
import { FilterContext } from "./FilterContext"

export const FilterProvider: FC<Props> = ({ children }) => {
  return (
    <FilterContext.Provider value={{}}>
        { children }
    </FilterContext.Provider>
  )
}

type Props = PropsWithChildren;
