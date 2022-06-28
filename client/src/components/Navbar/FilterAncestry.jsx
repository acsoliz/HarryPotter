import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterAncestry, getAllChars } from "../../redux/actions";

export const FilterAncestry = () => {
  const dispatch = useDispatch();

  const filterOptions = useSelector((state) => state.characters);

  function handleOnChangeAncestry(e) {
    e.preventDefault();
    if (e.target.value === "") return dispatch(getAllChars());
    dispatch(filterAncestry(e.target.value));
  }

  //-------ANCESTRIES---------------------------------------
  let ancestries = filterOptions?.map((item) => {
    return [item.ancestry, item];
  });
  var personasMapArr = new Map(ancestries); // Pares de clave y valor

  let ancestriesUnicos = [...personasMapArr.values()].map(
    (char) => char.ancestry
  ); // Conversión a un array


  return (
    <div>
      <div className="dropdown dropdown-dark">
        <select
          className="dropdown-select"
          onChange={(e) => handleOnChangeAncestry(e)}
        >
          <option value={"All"} className="">
            Todos
          </option>
          {ancestriesUnicos &&
            ancestriesUnicos.map((ancestry, i) => (
              <option key={i} value={ancestry}>
                {ancestry}
              </option>
            ))}

          {/* <option value={"half-blood"}>half-blood</option>
          <option value={"muggleborn"}>muggleborn</option>
          <option value={"pure-blood"}>pure-blood</option>
          <option value={"No tiene ancestro"}>No tiene ancestro</option>
          <option value={"squib"}>squib</option> */}
        </select>
      </div>
    </div>
  );
};
