import { BooksLists } from "./components/BooksLists"
import { Header } from "./components/Header"
import { ReadingList } from "./components/ReadingList"
import { ReadingListProvider } from "./context/ReadingListProvider"
import { useFilter } from "./hooks/useFilter"

export const App = () => {

  const { library } = useFilter();

  return (
    <ReadingListProvider>
      <div className="p-10 text-white">
        <Header />
        <div className="flex">
          <BooksLists library={library} />
          <ReadingList />
        </div>
      </div>
    </ReadingListProvider>
  )
}
