import { useReadingList } from "../hooks/useReadingList"

export const ReadingList = () => {

  const { readingList, removeBookToReadingList } = useReadingList();


  return (
    <aside className='hidden rounded mx-auto w-1/4 lg:block p-6 border-2 border-white min-h-screen'>
        <h4 className="text-4xl text-center mb-5">Reading list</h4>
        <ul className="flex flex-col gap-2 items-center">
          {
            readingList.map( book => (
              <li
                className="cursor-pointer flex justify-center"
                onClick={() => removeBookToReadingList(book.ISBN)}
                key={book.ISBN}
              >
                <img
                  className="hover:brightness-110 w-3/4"
                  src={book.cover} 
                  alt="" 
                />
              </li>
            ))
          }
        </ul>
    </aside>
  )
}

