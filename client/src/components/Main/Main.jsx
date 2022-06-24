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
import Nav from "../Nav/Nav";
import Navbar from "../Navbar/Navbar";
import NavbarTools from "../Navbar/NavbarTools";

const Main = () => {
  const dispatch = useDispatch();
  const characters = useSelector((state) => state.characters);

  //------------------PAGINATION
  const [currentPage, setCurrentPage] = useState(1); //Pagina actual
  const [charsByPage, setCharsByPage] = useState(10); // Cuantos videojuegos por page
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
    <div className="main-container">
      {/* <div className="tittle">
        <img src="" alt="" />
        <h1>Harry Potter</h1>
      </div> */}
      <Navbar />
      <NavbarTools />
      <div className="container">
        {/* <Nav /> */}

        <div className="content">
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
