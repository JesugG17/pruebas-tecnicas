import { FC, PropsWithChildren, useState } from "react"
import { ReadingListContext } from "./ReadingListContext"
import { Book } from "../types/libary.interface";

export const ReadingListProvider: FC<Props> = ({ children }) => {

  const [readingList, setReadingList] = useState<Book[]>([]);

  const addBookToReadingList = (book: Book) => {
    setReadingList([book, ...readingList]);
  }

  const removeBookToReadingList = (ISBN: string) => {
    const newReadingList = readingList.filter(book => book.ISBN !== ISBN);

    setReadingList(newReadingList);
  }

  return (
    <ReadingListContext.Provider value={{
      readingList,
      addBookToReadingList,
      removeBookToReadingList
    }}>
        { children }
    </ReadingListContext.Provider>
  )
}

type Props = PropsWithChildren;
