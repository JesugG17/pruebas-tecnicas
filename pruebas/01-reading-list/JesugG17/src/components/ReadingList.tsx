import { useReadingList } from "../hooks/useReadingList"

export const ReadingList = () => {

  const { readingList, removeBookToReadingList } = useReadingList();


  return (
    <aside className='hidden bg-gray-800 rounded mx-auto w-2/5 lg:block p-6 border-2 border-white min-h-screen'>
        <h3 className="text-4xl text-center ">Reading list</h3>
        <h4 className="text-center mb-5"><strong>{readingList.length} books</strong></h4>
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

