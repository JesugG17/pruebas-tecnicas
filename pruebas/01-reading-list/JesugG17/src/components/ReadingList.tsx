import { useIsMobile } from "../hooks/useIsMobile";
import { useModal } from "../hooks/useModal";
import { useReadingList } from "../hooks/useReadingList"

export const ReadingList = () => {

  const { readingList, removeBookToReadingList } = useReadingList();
  const isMobile = useIsMobile();
  const { isModalOpen, closeModal } = useModal();

  if (isMobile && !isModalOpen) {
    return <></>
  }


  return (
    <aside className='fixed top-0 left-0 bg-opacity-70 flex items-center w-full min-h-screen bg-black rounded mx-auto lg:block lg:sticky lg:bg-transparent lg:w-2/4'>
      <div className="bg-gray-700 w-2/4 mx-auto min-h-2/4 lg:min-h-screen rounded p-4 border-2">
          <div className="flex">
            <h3 className="text-2xl md:text-4xl text-center flex-1">Reading list</h3>
            <button
              onClick={closeModal} 
              className="lg:hidden"
            >
                X
            </button>
          </div>
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
      </div>
    </aside>
  )
}

