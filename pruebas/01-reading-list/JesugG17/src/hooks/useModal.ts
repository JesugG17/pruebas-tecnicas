import { useContext } from "react"
import { ModalContext } from "../context/ModalContext"

export const useModal = () => {
    const context = useContext(ModalContext);

    if (context === undefined) {
        throw new Error('You must envolve the app into a ModalProivder');
    }

    return context;
}
