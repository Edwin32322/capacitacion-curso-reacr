import { useModal } from "../hooks/useModal"
import { ContactForm } from "./ContactForm"
import { Modal } from "./Modal"
export const Modales = () => {
    const [isOpenModal1, openModal1, closeModal1] = useModal(false)
    const [isOpenModal2, openModal2, closeModal2] = useModal(false)
    const [isOpenModalContact, openModalContact, closeModalContact] = useModal(false)
    const [isOpenModalPortal, openModalPortal, closeModalPortal] = useModal(false)
    return (
        <div>
            <h2>Modales</h2>
            <button onClick={openModal1}>Modal 1</button>
            <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
                <h3>Modal 1</h3>
                <p>Hola Este es el contenido del modal 1</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro sed ea adipisci! Unde dolore dolorem consectetur odit provident, eligendi quia nam aspernatur id nesciunt deserunt quae ipsam doloremque fugit repudiandae!</p>
            </Modal>
            <button onClick={openModal2}>Modal 2</button>
            <Modal isOpen={isOpenModal2} closeModal={closeModal2}>
                <h3>Modal 2</h3>
                <p>Hola Este es el contenido del modal 2</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro sed ea adipisci! Unde dolore dolorem consectetur odit provident, eligendi quia nam aspernatur id nesciunt deserunt quae ipsam doloremque fugit repudiandae!</p>
            </Modal>
            <button onClick={openModalContact}>Modal Contacto</button>
            <Modal isOpen={isOpenModalContact} closeModal={closeModalContact}>
                <ContactForm></ContactForm>
            </Modal>
            <button onClick={openModalPortal}>Modal Portal</button>
            <Modal isOpen={isOpenModalPortal} closeModal={closeModalPortal}>
                <h1>Modal en Portal</h1>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis, enim necessitatibus voluptatem perferendis rerum, tempora debitis laborum vitae voluptas, amet totam soluta porro. Assumenda facilis, fuga quasi deserunt illo nesciunt.
                </p>
            </Modal>
        </div>
    )
}



