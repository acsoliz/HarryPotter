import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { sortByAlph } from "../../redux/actions";

const OrderCharacters = () => {
  const dispatch = useDispatch();
  const [orderAlph, setorderAlph] = useState({
    checked: null,
  });

  const handleChangeAlphabetic = (e) => {
    dispatch(sortByAlph(e.target.value));
    setorderAlph({
      checked: e.target.value,
    });
  };
  return (
    <div>
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
  );
};

export default OrderCharacters;
