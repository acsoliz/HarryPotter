import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Main.css";
import Character from "../Character/Character";
import { useDispatch } from "react-redux";
import {
  filterAncestry,
  getAllChars,
  filterHouses,
  sortByAlph,
} from "../../redux/actions";
import Searchbar from "../Searchbar/Searchbar";
import Pagination from "../Pagination/Pagination";

const Main = () => {
  const dispatch = useDispatch();
  const characters = useSelector((state) => state.characters);

  //------------------PAGINATION
  const [currentPage, setCurrentPage] = useState(1); //Pagina actual
  const [charsByPage, setCharsByPage] = useState(8); // Cuantos videojuegos por page
  const lastChar = currentPage * charsByPage;
  const firstChar = lastChar - charsByPage;
  const currentChar = characters && characters.slice(firstChar, lastChar); //
  //---------------------------------------------

  const [auxiliar, setAuxiliar] = useState(); //Pagina actual
  useEffect(() => {
    setAuxiliar(characters);
    setCurrentPage(1);
  }, [characters]); //de lo que depende

  const paginated = (pageNum) => {
    console.log("Estoy dentro de PAGINATED ");
    setCurrentPage(pageNum);
  };

  //----------------------------------------------

  //------------------FILTER BY ANCESTRY
  function handleOnChangeAncestry(e) {
    e.preventDefault();
    if (e.target.value === "") return dispatch(getAllChars());
    dispatch(filterAncestry(e.target.value));
  }

  //------------------FILTER BY HOUSE
  function handleOnChangeHouses(e) {
    e.preventDefault();
    if (e.target.value === "") return dispatch(getAllChars());
    dispatch(filterHouses(e.target.value));
  }

  //------------------BY ALPHABETIC
  const [orderAlph, setorderAlph] = useState({
    checked: null,
  });

  const handleChangeAlphabetic = (e) => {
    dispatch(sortByAlph(e.target.value));
    setorderAlph({
      checked: e.target.value,
    });
  };
  //--------------------------------

  return (
    <div>
      {/* <div className="tittle">
        <img src="" alt="" />
        <h1>Harry Potter</h1>
      </div> */}

      <div className="container">
        <aside className="side">
          <div className="div--container">
            <h2>Controllers</h2>
            <div className="div-container-hijo">
              <Searchbar />
            </div>
            <div className="div-container-hijo">
              <label>House</label>
              <br />
              <div className="dropdown dropdown-dark">
                <select
                  className="dropdown-select"
                  onChange={(e) => handleOnChangeHouses(e)}
                >
                  <option value={"All"}>Todos</option>
                  <option value={"Slytherin"}>Slytherin</option>
                  <option value={"Gryffindor"}>Gryffindor</option>
                  <option value={"Hufflepuff"}>Hufflepuff</option>
                  <option value={"Ravenclaw"}>Ravenclaw</option>
                  <option value={"Unknown"}>Unknown</option>
                </select>
              </div>
            </div>
            <div className="div-container-hijo">
              <label>Ancestrys</label>
              <br />
              <div className="dropdown dropdown-dark">
                <select
                  className="dropdown-select"
                  onChange={(e) => handleOnChangeAncestry(e)}
                >
                  <option value={"All"} className="">
                    Todos
                  </option>
                  <option value={"half-blood"}>half-blood</option>
                  <option value={"muggleborn"}>muggleborn</option>
                  <option value={"pure-blood"}>pure-blood</option>
                  <option value={"No tiene ancestro"}>No tiene ancestro</option>
                  <option value={"squib"}>squib</option>
                </select>
              </div>
            </div>

            <div className="div-container-hijo">
              <div className="rb-container">
                <input
                  id="opt1"
                  type="radio"
                  name="radio"
                  value="a-z"
                  onChange={handleChangeAlphabetic}
                />
                <label htmlFor="opt1" className="label1">
                  <span className="span-rd">A-z</span>
                </label>
                <input
                  id="opt2"
                  type="radio"
                  name="radio"
                  value="z-a"
                  onChange={handleChangeAlphabetic}
                />
                <label htmlFor="opt2" className="label2">
                  <span className="span-rd">Z-a</span>
                </label>
              </div>
              {/* ---------------------------RADIO BUTTONS */}
            </div>

            <div className="div-container-hijo">
              <Link to="/activities">
                <button className="custom-btn btn-7">Activities View</button>
              </Link>
            </div>
          </div>
        </aside>

        <div className="content">
          <div className="cards">
            {currentChar.length > 0 ? (
              currentChar.map((pj) => (
                <Character
                  name={pj.name}
                  actor={pj.actor}
                  house={pj.house}
                  ancestry={pj.ancestry}
                  image={pj.image}
                  key={pj.id}
                  id={pj.id}
                />
              ))
            ) : (
              <div>Loading...</div>
            )}
          </div>
          {Array.isArray(characters) ? (
            <Pagination
              characters={characters && characters.length}
              charsByPage={charsByPage}
              paginated={paginated}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Main;
