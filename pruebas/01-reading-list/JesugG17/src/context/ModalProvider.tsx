import { FC, PropsWithChildren, useState } from "react"
import { ModalContext } from "./ModalContext"

export const ModalProvider: FC<Props> = ({ children }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false);
    }

  return (
    <ModalContext.Provider value={{
        isModalOpen,
        openModal,
        closeModal
    }}>
        { children }
    </ModalContext.Provider>
  )
}

type Props = PropsWithChildren;
