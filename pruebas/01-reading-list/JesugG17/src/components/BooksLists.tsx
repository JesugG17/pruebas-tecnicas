import { useReadingList } from '../hooks/useReadingList';
import { library } from '../mock/books.json';

export const BooksLists = () => {

    
    const { readingList, addBookToReadingList } = useReadingList();

  return (
    <main className='mt-5 lg:w-2/4'>
        <ul className='flex flex-wrap justify-center gap-5 lg:justify-start'>
            {
                library.map(({book}) => (
                    <li
                        className={`w-2/5 md:w-1/4 lg:w-1/5 cursor-pointer hover:brightness-110 ${readingList.includes(book) && 'pointer-events-none opacity-50'}`}
                        key={book.ISBN}
                        onClick={() => addBookToReadingList(book)}
                    >
                        <img 
                            className='w-full'
                            src={book.cover} 
                            alt="" 
                        />
                    </li>
                ))
            }
        </ul>
    </main>
  )
}
