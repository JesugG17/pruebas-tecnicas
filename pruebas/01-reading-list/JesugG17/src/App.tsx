import { BooksLists } from "./components/BooksLists"
import { Header } from "./components/Header"

export const App = () => {

  return (
   <div className="p-10 text-white">
    <Header />
    <BooksLists />
   </div>
  )
}
