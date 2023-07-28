import { createContext } from "react";
import { Book } from "../types/libary.interface";

type ReadingListContexType = {
    readingList: Book[]
    setReadingList: React.Dispatch<React.SetStateAction<Book[]>>;
}

export const ReadingListContext = createContext<ReadingListContexType>({} as ReadingListContexType);