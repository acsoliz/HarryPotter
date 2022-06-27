import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterHouses, getAllChars } from "../../redux/actions";

const FilterHouse = () => {
  const dispatch = useDispatch();

  //_____________________filtrado ___________________________
  const filterOptions = useSelector((state) => state.characters);

  let houses = filterOptions?.map((item) => {
    return [item.house, item];
  });
  var personasMapArr = new Map(houses); // Pares de clave y valor

  let housesUniques = [...personasMapArr.values()].map((char) => char.house); // Conversión a un array

  console.log(housesUniques, "Filter houses");
  //_____________________filtrado ___________________________

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
          {housesUniques &&
            housesUniques.map((house, i) => (
              <option key={i} value={house}>
                {house}
              </option>
            ))}
          {/* <option value={"Slytherin"}>Slytherin</option>
          <option value={"Gryffindor"}>Gryffindor</option>
          <option value={"Hufflepuff"}>Hufflepuff</option>
          <option value={"Ravenclaw"}>Ravenclaw</option>
          <option value={"Unknown"}>Unknown</option> */}
        </select>
      </div>
    </div>
  );
};

export default FilterHouse;
