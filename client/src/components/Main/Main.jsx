import React, { useState } from "react";
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
import Orders from "./Orders/Orders";
import Searchbar from "../Searchbar/Searchbar";

const Main = () => {
  const dispatch = useDispatch();

  const characters = useSelector((state) => state.characters);

  function handleOnChangeAncestry(e) {
    e.preventDefault();
    if (e.target.value === "") return dispatch(getAllChars());
    dispatch(filterAncestry(e.target.value));
  }

  function handleOnChangeHouses(e) {
    e.preventDefault();
    if (e.target.value === "") return dispatch(getAllChars());
    dispatch(filterHouses(e.target.value));
  }

  //-------------------------------------------------
  // const [orderPb, setOrderPb] = useState({
  //   checked: null,
  // });

  // const handleChangePopulation = (e) => {
  //   // e.preventDefault();
  //   // dispatch(getAllCountries());
  //   dispatch(sortByAlph(e.target.value));
  //   setOrderPb({
  //     checked: e.target.value,
  //   });
  // };
  //------------------BY ALPHABETIC
  const [orderAlph, setorderAlph] = useState({
    checked: null,
  });

  const handleChangeAlphabetic = (e) => {
    // e.preventDefault();

    dispatch(sortByAlph(e.target.value));
    setorderAlph({
      checked: e.target.value,
    });
  };

  //------------------------------------------------
  return (
    <div>
      <div className='tittle'>
        <img src="" alt="" />
        <h1>Harry Potter</h1>
      </div>
      <div className="container">
        <aside className="side">
          <h2>Controllers</h2>
          <div>
            <Searchbar />
          </div>
          <div>
            <label>Ancestrys</label><br/>
            <select onChange={(e) => handleOnChangeAncestry(e)}>
              <option value={"All"}>Todos</option>
              <option value={"half-blood"}>half-blood</option>
              <option value={"muggleborn"}>muggleborn</option>
              <option value={"pure-blood"}>pure-blood</option>
              <option value={"No tiene ancestro"}>No tiene ancestro</option>
              <option value={"squib"}>squib</option>
            </select>
          </div>

          <div>
            <label>House</label><br/>
            <select onChange={(e) => handleOnChangeHouses(e)}>
              <option value={"All"}>Todos</option>
              <option value={"Slytherin"}>Slytherin</option>
              <option value={"Gryffindor"}>Gryffindor</option>
              <option value={"Hufflepuff"}>Hufflepuff</option>
              <option value={"Ravenclaw"}>Ravenclaw</option>
              <option value={"Unknown"}>Unknown</option>
            </select>
          </div>
          <div>
            <div className="inputsContainer">
              <div className="items">
                <form className="nav-items">
                  <label>
                    <input
                      type="radio"
                      checked={orderAlph.checked === "a-z"}
                      onChange={handleChangeAlphabetic}
                      value="a-z"
                    />
                    a-z
                  </label>
                  <label>
                    <input
                      type="radio"
                      checked={orderAlph.checked === "z-a"}
                      onChange={handleChangeAlphabetic}
                      value="z-a"
                    />
                    z-a
                  </label>
                </form>
              </div>
            </div>
          </div>
        </aside>

        <div className="content">
          <ul className="cards">
            {characters.length > 0 ? (
              characters.map((pj) => (
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
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Main;
