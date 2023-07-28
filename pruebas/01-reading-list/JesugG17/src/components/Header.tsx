import { useFilter } from "../hooks/useFilter"
import { useReadingList } from "../hooks/useReadingList";
import { Filters } from "./Filters"
import { ReadingListIcon } from "./Icons"

export const Header = () => {

  const { library } = useFilter();
  const { readingList } = useReadingList();

  const booksLeft = library.length - readingList.length;

  return (
    <header className="relative">
      <h4 className="text-3xl md:text-center md:text-4xl lg:text-left">{booksLeft} Books available</h4>
      <button className="fixed right-8 top-8 hover:scale-110 transition-all duration-100 lg:hidden">
        <ReadingListIcon />
      </button>
      <Filters />
    </header>
  )
}
