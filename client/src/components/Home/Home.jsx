import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import tittle from "../../assets/tittle-Harry.png";
import tittle1 from "../../assets/snitch.png";
import sombrero from "../../assets/sombrerogif.gif";

const Home = () => {
  return (
    <div className="landing-container">
      <div className="tittle-container">
        <img src={tittle} className="img-tittle" />
      </div>
      <div>
        <img src={tittle1} className='avatar'/>
      </div>

      <div className='btn-container'>
        <Link to="/main" className="link-button">
          <button class="custom-btn btn-7">Welcome</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
