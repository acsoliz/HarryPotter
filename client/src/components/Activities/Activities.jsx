import React from "react";
import { Link } from "react-router-dom";
import "./Activities.css";

const Activities = () => {
  return (
    <div>
      <div>
        <div className="btn-container">
          <Link to="/main" className="link-button">
            <button class="custom-btn btn-7">volver</button>
          </Link>
        </div>
        Activities
        <h1></h1>
      </div>
      <div>
        <div className="card">
          <div className="card-body">
            <h3 className="card-title">TITULO</h3>

            <div className="date-place">
              <h5>2000-12-12 / Netflix</h5>
            </div>
            <div className="comments">
              <p>Comments</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activities;
