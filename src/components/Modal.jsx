/* eslint-disable react/prop-types */
import "./Modal.css"
export const Modal = ({ children, isOpen, closeModal }) => {
    return (
        <article className={isOpen ? "modal is-open" : "modal"} onClick={closeModal}>
            <div className="modal-container" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={closeModal}>X</button>
                {children}
            </div>
        </article>
    )
}