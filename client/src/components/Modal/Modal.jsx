import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getActivities } from "../../redux/actions";
import "./Modal.css";
const Modal = ({ isOpen, closeModal }) => {
  const dispatch = useDispatch();
  const activities = useSelector((state) => state.activities);
  console.log(activities, isOpen);
  useEffect(() => {
    if (isOpen) {
      dispatch(getActivities());
    }
  }, [isOpen]);

  const handleModalDialogClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className={`modal ${isOpen && "modal-open"}`} onClick={closeModal}>
      <div className="modal__dialog" onClick={handleModalDialogClick}>
        <h1>Activities </h1>
        <p>{activities[0]?.name}</p>
        {isOpen &&
          activities.map((e) => {
            <div>
              <h2>{e.name}</h2>
              <h2>{e.place}</h2>
              <h2>{e.date}</h2>
              <h2>{e.comments}</h2>
            </div>;
          })}

        <button onClick={closeModal}>close Modal</button>
      </div>
    </div>
  );
};

export default Modal;
