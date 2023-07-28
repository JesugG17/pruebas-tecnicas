import { ChangeEvent, useState } from "react"
import { useFilter } from "../hooks/useFilter";
import { Filters as FiltersType } from "../types/filter.type";

export const Filters = () => {

  const { setFilter } = useFilter();
  const [range, setRange] = useState(43);


  const handleChangePages = (event: ChangeEvent<HTMLInputElement>) => {
    const pages = +event.target.value;
    setRange(pages);
    setFilter((prevState) => {
      return {
        ...prevState,
        minPages:  pages
      }
    })
  }

  const handleChangeCategory = (event: ChangeEvent<HTMLSelectElement>) => {
    const cover = event.target.value;
    setFilter((prevState) => ({
      ...prevState,
      genre: cover
    } as FiltersType));
  }

  return (
    <div className='flex flex-col mt-2 gap-2 md:flex-row md:justify-center lg:w-2/4 lg:justify-start lg:gap-6'>
      <div className="flex gap-2 items-center">
        <label htmlFor="">By pages</label>
        <input 
          onChange={handleChangePages} 
          type="range" 
          min={43} 
          max={1200}
          value={range}
        />
        <strong>{ range }</strong>
      </div>
      <div className="flex gap-2 items-center">
        <label htmlFor="">By category</label>
        <select onChange={handleChangeCategory} className='bg-gray-700 p-1' name="" id="">
          <option value="all">All</option>
          <option value="Fantasia">Fantasy</option>
          <option value="Ciencia ficcion">Science fiction</option>
          <option value="Zombies">Zombies</option>
          <option value="Terror">Terror</option>
        </select>
      </div>
    </div>
  )
}
