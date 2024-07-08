/* eslint-disable react/prop-types */
import "./Modal.css"
import ReactDOM from "react-dom"
export const ModalPortal = ({ children, isOpen, closeModal }) => {
    return ReactDOM.createPortal(
        <article className={isOpen ? "modal is-open" : "modal"} onClick={closeModal}>
            <div className="modal-container" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={closeModal}>X</button>
                {children}
            </div>
        </article>,
        document.getElementById("modal")
    )
}