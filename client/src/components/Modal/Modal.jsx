import React from "react";
import "./Modal.css";
const Modal = ({ isOpen, closeModal }) => {


  const handleModalDialogClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className={`modal ${isOpen && "modal-open"}`} onClick={closeModal}>
      <div className="modal__dialog" onClick={handleModalDialogClick}>
        <h1>Modal </h1>
        <button onClick={closeModal}>close Modal</button>
      </div>
    </div>
  );
};

export default Modal;
