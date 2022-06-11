import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Activities.css";
import useModal from "../../hooks/useModal";
import Modal from "../Modal/Modal";
import { useDispatch, useSelector } from "react-redux";
import { getActivities } from "../../redux/actions";

const Activities = () => {
  const [isOpenModal, openModal, closeModal] = useModal();

  const dispatch = useDispatch();
  const activities = useSelector((state) => state.activities);
  useEffect(() => {
    dispatch(getActivities());
  }, []);
  return (
    <div className="container-act">
      <div>
        <Modal isOpen={isOpenModal} closeModal={closeModal} />
        <div className="btn-volver">
          <Link to="/main" className="link-button">
            <button className="custom-btn btn-7">volver</button>
          </Link>
          <button onClick={openModal}>Add Activity</button>
        </div>
        <h1>Activities</h1>
      </div>
      <div className="cards-wrapper cards-wrapper--fill">
        {activities[0] &&
          activities.map((e, i) => (
            <div key={i}>
              <div className="card-act" width="150px" height="200px" alt="">
                <div className="card-body">
                  <h3 className="card-title">{e.title}</h3>

                  <div className="date-place">
                    <h5>
                      {e.date} / {e.place}
                    </h5>
                  </div>
                  <div className="comments">
                    <p>{e.comments}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Activities;
