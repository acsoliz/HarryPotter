import React from "react";
import FilterHouse from "../Navbar/FilterHouse";
import { FilterAncestry } from "../Navbar/FilterAncestry";
import "./NavbarTools.css";

const NavbarTools = () => {
  return (
    <div className="tools-container">
      <ul className="ul-tools">
        {/* <li className="li-items-tools">
          <OrderCharacters />
        </li> */}

        <li className="li-items-tools">
          <FilterAncestry />
        </li>
        <li className="li-items-tools">
          <FilterHouse />
        </li>
      </ul>
    </div>
  );
};

export default NavbarTools;
