import React from "react";
import { Link } from "react-router-dom";
import notFoundimg from "../../assets/NotFound.gif";

const NotFound = () => {
  return (
    <div>
      <Link  to="/">
        <img src={notFoundimg} alt="" />
      </Link>
    </div>
  );
};

export default NotFound;
