import { FC } from "react";
import { useReadingList } from "../hooks/useReadingList";
import { LibraryElement } from "../types/libary.interface";

export const BooksLists: FC<Props> = ({ library }) => {
  const { addBookToReadingList, searchBookOnReadingList } = useReadingList();
  return (
    <main className="mt-5 lg:w-2/4">
      <ul className="flex flex-wrap justify-center gap-5 lg:justify-start">
        {
          library.length === 0 &&
          (
            <h2 className="text-center flex-1 text-4xl">No books found</h2>
          )
        }
        {library.map(({ book }) => {
          const isBookOnReadingList = searchBookOnReadingList(book.ISBN);

          return (
            <li
              className={`w-2/5 md:w-1/4 lg:w-1/5 cursor-pointer hover:brightness-110 hover:scale-110 ${
                isBookOnReadingList && "pointer-events-none opacity-30"
              }`}
              key={book.ISBN}
              onClick={() => addBookToReadingList(book)}
            >
              <img className="w-full" src={book.cover} alt="" />
            </li>
          );
        })}
      </ul>
    </main>
  );
};

type Props = {
  library: LibraryElement[];
};
