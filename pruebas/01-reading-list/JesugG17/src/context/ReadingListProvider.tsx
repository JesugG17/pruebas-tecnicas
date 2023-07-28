import { FC, PropsWithChildren, useState } from "react"
import { ReadingListContext } from "./ReadingListContext"
import { Book } from "../types/libary.interface";

export const ReadingListProvider: FC<Props> = ({ children }) => {

  const [readingList, setReadingList] = useState<Book[]>([]);

  return (
    <ReadingListContext.Provider value={{
      readingList,
      setReadingList
    }}>
        { children }
    </ReadingListContext.Provider>
  )
}

type Props = PropsWithChildren;
