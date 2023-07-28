import { FC, PropsWithChildren, useEffect, useState } from "react"
import { ReadingListContext } from "./ReadingListContext"
import { Book } from '../types/libary.interface';

export const ReadingListProvider: FC<Props> = ({ children }) => {

  const [readingList, setReadingList] = useState<Book[]>(() => {
    const storage = localStorage.getItem('list') || '[]';
    return JSON.parse(storage);
  });

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(readingList));
  }, [readingList]);

  const addBookToReadingList = (book: Book) => {
    setReadingList([book, ...readingList]);
  }

  const removeBookToReadingList = (ISBN: string) => {
    const newReadingList = readingList.filter(book => book.ISBN !== ISBN);

    setReadingList(newReadingList);
  }

  const searchBookOnReadingList = (ISBN: string) => {
    const isBookOnList = readingList.some(book => book.ISBN === ISBN);
    return isBookOnList;   
  }

  return (
    <ReadingListContext.Provider value={{
      readingList,
      addBookToReadingList,
      removeBookToReadingList,
      searchBookOnReadingList
    }}>
        { children }
    </ReadingListContext.Provider>
  )
}

type Props = PropsWithChildren;
