import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {sortByAlph} from "../../../redux/actions/index";

const Orders = () => {
  const dispatch = useDispatch();
  //------------------BY POBLATION
  const [orderPb, setOrderPb] = useState({
    checked: null,
  });

  const handleChangePopulation = (e) => {
    // e.preventDefault();
    // dispatch(getAllCountries());
    dispatch(sortByAlph(e.target.value));
    setOrderPb({
      checked: e.target.value,
    });
  };
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

  return (
    <div className="inputsContainer">
      <p className="tittle">Order by</p>
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
        <form className="nav-items">
          <label>
            <input
              type="radio"
              checked={orderPb.checked === "most"}
              onChange={handleChangePopulation}
              value="most"
            />
            most
          </label>
          <label>
            <input
              type="radio"
              checked={orderPb.checked === "less"}
              onChange={handleChangePopulation}
              value="less"
            />
            Less
          </label>
        </form>
      </div>
    </div>
  );
};

export default Orders;
