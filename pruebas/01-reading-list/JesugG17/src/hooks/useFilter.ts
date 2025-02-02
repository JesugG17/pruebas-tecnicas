import { useContext, useRef } from "react"
import { library as initialLibrary } from '../mock/books.json';
import { FilterContext } from "../context/FilterContext"
import { removeAccents } from "../utils/removeAccents";

export const useFilter = () => {
   
    const libraryRef = useRef(initialLibrary);
    const {filter, setFilter} = useContext(FilterContext);

    const filterBooks = () => {

        const library = libraryRef.current;

        const filteredLibrary = library.filter(item => (
            
            item.book.pages >= filter.minPages &&
            (
                filter.genre === 'all' ||
                removeAccents(item.book.genre) == filter.genre
            )

        ));
       
        return filteredLibrary;
    }

    const library = filterBooks();
    

    return {
        library,
        setFilter,
        totalItems: libraryRef.current.length
    }

}
