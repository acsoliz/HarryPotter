import React from "react";
import { useDispatch } from "react-redux";
import { filterAncestry, getAllChars } from "../../redux/actions";

export const FilterAncestry = () => {
  const dispatch = useDispatch();
  function handleOnChangeAncestry(e) {
    e.preventDefault();
    if (e.target.value === "") return dispatch(getAllChars());
    dispatch(filterAncestry(e.target.value));
  }
  return (
    <div>
      {/* <label>Ancestrys</label> */}
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
  );
};
