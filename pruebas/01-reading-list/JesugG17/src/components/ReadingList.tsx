import { useReadingList } from "../hooks/useReadingList"

export const ReadingList = () => {

  const { readingList, removeBookToReadingList } = useReadingList();


  return (
    <aside className='hidden bg-gray-800 rounded mx-auto w-2/5 lg:block p-6 border-2 border-white min-h-screen'>
        <h4 className="text-4xl text-center mb-5">Reading list</h4>
        <ul className="flex gap-5 justify-center flex-wrap">
          {
            readingList.map( book => (
              <li
                className="w-2/5 cursor-pointer flex justify-center"
                onClick={() => removeBookToReadingList(book.ISBN)}
                key={book.ISBN}
              >
                <img
                  className="hover:brightness-110"
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

