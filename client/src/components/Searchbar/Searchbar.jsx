import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterName, findCharByName } from "../../redux/actions";
import "./Searchbar.css";

const Searchbar = () => {
  const dispatch = useDispatch();
  const charactersFilter = useSelector((state) => state.characters);
  const [name, setName] = useState("");

  useEffect(() => {
    dispatch(filterName(name));

  }, [name]);

  const handleInputChange = ({ target }) => {
    setName(target.value);
    //action buscar
    // dispatch(filterName(name));
    // console.log(name)
  };
  // const filtrarSearch = () => {
  //   return charactersFilter.filter((character) => character.name == name);
  // };
  const handleOnClickSearch = () => {
    dispatch(findCharByName(name));
  };
  return (
    <div className="search-box">
      <form className="search-form">
        <input
          type="text"
          placeholder="Buscar..."
          onChange={(e) => handleInputChange(e)}
        />
        <button
          className="search-button  btn-search"
          type="button"
          onClick={() => handleOnClickSearch()}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default Searchbar;
