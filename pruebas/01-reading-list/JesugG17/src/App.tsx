import { BooksLists } from "./components/BooksLists"
import { Header } from "./components/Header"
import { ReadingList } from "./components/ReadingList"
import { ReadingListProvider } from "./context/ReadingListProvider"

export const App = () => {

  return (
    <ReadingListProvider>
      <div className="p-10 text-white">
        <Header />
        <div className="flex">
          <BooksLists />
          <ReadingList />
        </div>
      </div>
    </ReadingListProvider>
  )
}
