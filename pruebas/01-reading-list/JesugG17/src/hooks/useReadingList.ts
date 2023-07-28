import { useContext } from "react"
import { ReadingListContext } from "../context/ReadingListContext"

export const useReadingList = () => {
    const context = useContext(ReadingListContext);

    if (context === undefined) {
        throw new Error('You need to envolve the application with ReadingListProvider');
    }
    
    return context;
}
