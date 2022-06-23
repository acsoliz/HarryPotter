import React from "react";
import { Link } from "react-router-dom";
import FilterHouse from "../FilterHouse";
import OrderCharacters from "../OrderCharacters";
import Searchbar from "../Searchbar/Searchbar";
import { FilterAncestry } from "./FilterAncestry";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <header>
        <nav className="lw-nav navbar">
          <div className="lw-nav__header navbar-header">
            {/* <button
              className="lw-nav__toggle navbar-toggle collapsed pull-right"
              type="button"
              data-target="#lw-navbar"
              data-toggle="collapse"
              aria-expanded="false"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="glyphicon glyphicon-menu-hamburger"></span>
            </button> */}

            <a className="lw-nav__logo navbar-brand" href="#">
              <img src="http://rodenbeek.com/preview/compass-logo-white.svg" />
            </a>
          </div>

          <div
            className="lw-nav__menu-container navbar-collapse collapse"
            id="lw-navbar"
          >
            <ul className="lw-nav__menu nav navbar-nav">
              <li className="lw-nav__menu-item">
                <Searchbar />
              </li>
              <li className="lw-nav__menu-item">
                <FilterAncestry />
              </li>
              <li className="lw-nav__menu-item">
                <FilterHouse />
              </li>


              <li className="lw-nav__menu-item">
                <div>
                  <Link to="/activities">
                    <button className="custom-btn btn-7">
                      Activities View
                    </button>
                  </Link>
                </div>
              </li>
              {/* <li className="lw-nav__menu-item">
                <OrderCharacters />
              </li> */}
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
