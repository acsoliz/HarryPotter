import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { findCharByName } from "../../redux/actions";
import './Searchbar.css'

const Searchbar = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const handleInputChange = ({ target }) => {
    console.log(target.value);
    setName(target.value);
    //action buscar
  };
  const handleOnClickSearch = () => {
    dispatch(findCharByName(name));
  };
  return (
    <div className="search-box">
      <form className='search-form'>
        <input
          type="text"
          placeholder="Buscar..."
          onChange={(e) => handleInputChange(e)}
        />
        <button className='search-button  btn-search' type="button" onClick={() => handleOnClickSearch()}>
          Search
        </button>
      </form>
    </div>
  );
};

export default Searchbar;
