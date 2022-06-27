import React, {  useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { createActivity } from "../../redux/actions";
import "./Modal.css";
const Modal = ({ isOpen, closeModal }) => {
  const activities = useSelector((state) => state.activities);
  const dispatch = useDispatch();
  const [state, setstate] = useState({
    title: "",
    place: "",
    date: "",
    comments: "",
  });
  const [error, setError] = useState({
    title: "",
    place: "",
    date: "",
    comments: "",
  });

  const handleInputChange = (e) => {
    e.preventDefault();
    setstate({
      ...state,
      [e.target.name]: e.target.value,
    });

    validations(e.target.name, e.target.value);
  };

  const handleModalDialogClick = (e) => {
    e.stopPropagation();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const flag = validateSubmit();
    if (!flag.length) {
      try {
        dispatch(createActivity(state));
        alert("Activity Created! ");
        window.location.reload();
      } catch (error) {
        // console.log(error);
      }
    } else {
      // console.log('atenti soy el Flag para validar: ', flag);
      alert("Missing or invalid values");
    }
  };

  //---------------VALIDATIONS----------

  const validations = (state, value) => {
    switch (state) {
      case "title":
        if (value === "") {
          return setError({ ...error, title: "" });
        }
        if (auxiliar(value)) {
          // console.log("entre al if")
          return setError({
            ...error,
            title: "There is a event with that title, please change it",
          });
        }
        if (value.length < 3 || value.length > 35) {
          return setError({ ...error, title: "max(35 characters)" });
        }

        if (!/^[A-Za-z0-9\u00C0-\u017F ]+$/.test(value)) {
          return setError({ ...error, title: "Not special characters" });
        } else {
          return setError({ ...error, title: "" });
        }
      case "place":
        if (value === "") {
          return setError({ ...error, place: "" });
        }
        if (value.length < 3 || value.length > 42) {
          return setError({ ...error, place: "max 42 characters" });
        }
        if (!/^[A-Za-z0-9\u00C0-\u017F ]+$/.test(value)) {
          return setError({ ...error, place: "Not special characters" });
        } else {
          return setError({ ...error, place: "" });
        }
      case "comments":
        if (value === "") {
          return setError({ ...error, commentscomments: "" });
        }
        if (value.length < 5 || value.length > 120) {
          return setError({ ...error, comments: "Min 5/ max 120 characters" });
        }
        if (/[$%&|<>#]/.test(value)) {
          //const formato = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        } else {
          return setError({ ...error, comments: "" });
        }
        break 
      case "date":
        if (value === "") {
          return setError({ ...error, commentscomments: "" });
        }
        if (value.length !== 10) {
          return setError({ ...error, date: "invalid format" });
        } else {
          return setError({ ...error, date: "" });
        }

      default:
        return error;
    }
  };

  ///----------------------------------------
  const validateSubmit = () => {
    var asignErrors = {};

    if (!state.title.length) {
      asignErrors = {
        ...asignErrors,
        title: "Must complete whit a valid Title",
      };
    }
    if (!state.place.length) {
      asignErrors = {
        ...asignErrors,
        place: "Must complete whit a valid Place",
      };
    }
    if (!state.date) {
      console.log(state.date, "deberia estar en blacno");
      asignErrors = { ...asignErrors, date: "Must select a date" };
    }
    if (!state.comments.length) {
      asignErrors = { ...asignErrors, comments: "Must add a comments" };
    }

    setError({ ...error, ...asignErrors });

    return Object.values({ ...error, ...asignErrors }).filter(
      (value) => value !== ""
    );
  };

  //----------------AUX-------------------
  /////   Esto es para verificar si value (name)
  function auxiliar(value) {
    console.log("Estoy recorriendo personajes en busca de un nombre: ", value);
    // antes de esto me traigo del state.characters
    for (var i = 0; i < activities.length; i++) {
      if (activities[i].name == value) {
        return true;
      }
    }
    return false;
  }

  return (
    <div className={`modal ${isOpen && "modal-open"}`} onClick={closeModal}>
      <div className="modal__dialog" onClick={handleModalDialogClick}>
        <h1 className="title-box">New Activity </h1>

        <form>
          <div className="user-box">
            <input
              type="text"
              name="title"
              value={state.title}
              onChange={handleInputChange}
            />
            <label>Title</label>
            <span>{error.title} </span>
          </div>
          <div className="user-box">
            <input
              type="text"
              name="place"
              value={state.place}
              onChange={handleInputChange}
            />
            <label>Place</label>
            <span>{error.place} </span>
          </div>
          <div className="user-box">
            <input
              type="date"
              name="date"
              value={state.date}
              onChange={handleInputChange}
            />
            <label>Date</label>
            <span>{error.date} </span>
          </div>
          <div className="user-box textarea-box">
            <textarea
              // maxlength="120"
              name="comments"
              value={state.comments}
              onChange={handleInputChange}
              placeholder="Write a short description"
            ></textarea>
            <label>Description</label>
            <span>{error.comments} </span>
          </div>
          <div className="user-submit">
            <Link to="" onClick={(e) => handleSubmit(e)}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Submit
            </Link>
          </div>
        </form>

        {/* <div>
          <button onClick={closeModal}>close Modal</button>
        </div> */}
      </div>
    </div>
  );
};

export default Modal;
