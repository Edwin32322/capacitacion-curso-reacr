import { useState } from "react"

export const useModal = (defaultValue = false) => {
    const [isOpen, setIsOpen] = useState(defaultValue)
    const openModal = () => setIsOpen(true)
    const closeModal = () => {
        setIsOpen(false)
    }
    return [isOpen, openModal, closeModal]
}
