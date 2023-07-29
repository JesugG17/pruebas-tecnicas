import { createContext } from "react";

type ModalContextType = {
    isModalOpen: boolean;
    openModal: () => void;
    closeModal: () => void;
}


export const ModalContext = createContext<ModalContextType>({} as ModalContextType);