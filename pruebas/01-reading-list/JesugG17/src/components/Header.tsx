import { Filters } from "./Filters"
import { ReadingListIcon } from "./Icons"

export const Header = () => {
  return (
    <header className="relative">
      <h4 className="text-3xl md:text-center md:text-4xl lg:text-left">8 libros disponibles</h4>
      <button className="fixed right-8 top-8 hover:scale-110 transition-all duration-100 lg:hidden">
        <ReadingListIcon />
      </button>
      <Filters />
    </header>
  )
}
