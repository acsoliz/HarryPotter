import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "./Main.css";
import Character from "../Character/Character";
import { useDispatch } from "react-redux";
import { sortByAlph } from "../../redux/actions";
import Pagination from "../Pagination/Pagination";
import Navbar from "../Navbar/Navbar";
import NavbarTools from "../Navbar/NavbarTools";
import Loading from "../Loading/Loading";

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
    setCurrentPage(pageNum);
  };

  //----------------------------------------------

  //-------HOSES---------------------------------------
  // const filterOptions = auxiliar;
  
  
  // let houses = filterOptions?.map(item=>{
  //   return [item.house,item]
  // });
  // var personasMapArr = new Map(houses); // Pares de clave y valor
  
  // let housesUniques = [...personasMapArr.values()].map(char=>char.house); // Conversión a un array
  
  // //----------------------------------------------
  // //-------ANCESTRIES---------------------------------------


  //    let ancestries = filterOptions?.map(item=>{
  //   return [item.ancestry,item]
  // });
  // personasMapArr = new Map(ancestries); // Pares de clave y valor
  
  // let ancestriesUnicos = [...personasMapArr.values()].map(char=>char.ancestry ); // Conversión a un array
  





  //------------------BY ALPHABETIC
  const [orderAlph, setorderAlph] = useState({
    checked: null,
  });

  const handleChangeAlphabetic = (e) => {
    setorderAlph({
      checked: e.target.value,
    });
    dispatch(sortByAlph(orderAlph.checked));
  };
  //--------------------------------

  return (
    <div className="main-container">
      <Navbar />
      <NavbarTools />
      <div className="order-alphabetic">
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
      </div>
      <div className="container">
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
              <Loading />
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
