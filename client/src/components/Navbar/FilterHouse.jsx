import React from "react";
import { useDispatch } from "react-redux";
import { filterHouses, getAllChars } from "../../redux/actions";

const FilterHouse = () => {
  const dispatch = useDispatch();
  
  function handleOnChangeHouses(e) {
    e.preventDefault();
    if (e.target.value === "") return dispatch(getAllChars());
    dispatch(filterHouses(e.target.value));
  }

  return (
    <div>
      {/* <label>House</label> */}
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
  );
};

export default FilterHouse;
