import React from "react";
import { Link } from "react-router-dom";
import Searchbar from "../Searchbar/Searchbar";
import "./Navbar.css";
import Logo from "../../assets/icon-3.png"
import OrderCharacters from "./OrderCharacters";

const Navbar = () => {
  return (
    <div>
      <header>
        <nav className="lw-nav navbar">
          <div className="div-logo" onClick={()=> window.location.reload()} >
            {/* <Link to="/main" className="link-logo" > */}
              <img className="link-logo" src={Logo} height="50px" />
            {/* </Link> */}
          </div>

          <div
            className="lw-nav__menu-container navbar-collapse collapse"
            id="lw-navbar"
          >
            <ul className="ul-nav__menu">
              <li className="search-bar">
                <Searchbar />
              </li>

              <li className="btn-activities">
                <div>
                  <Link to="/activities">
                    <button className="custom-btn btn-7">
                      Activities View
                    </button>
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
