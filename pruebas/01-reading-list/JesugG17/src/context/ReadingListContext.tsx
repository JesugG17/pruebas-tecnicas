import { createContext } from "react";
import { Book } from "../types/libary.interface";

type ReadingListContexType = {
    readingList: Book[]
    addBookToReadingList: (book: Book) => void;
    removeBookToReadingList: (ISBN: string) => void;
    searchBookOnReadingList: (ISBN: string) => boolean;
}

export const ReadingListContext = createContext<ReadingListContexType>({} as ReadingListContexType);