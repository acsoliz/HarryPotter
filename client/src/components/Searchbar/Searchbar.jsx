import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { findCharByName } from "../../redux/actions";

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
    <div>
      <input
        type="text"
        placeholder="Buscar..."
        onChange={(e) => handleInputChange(e)}
      />
      <button type="button" onClick={() => handleOnClickSearch()}>
        Search
      </button>
    </div>
  );
};

export default Searchbar;
