import React from "react";
import { Link } from "react-router-dom";
import "./Character.css";

export default function Character({ name, actor, id, house, ancestry, image }) {
  return (
    <>
      <li>
        <Link to={`/characters/${id}`} className="card">
          <img
            src={image}
            className="card__image"
            alt=""
            // width="160" height="280"
          />
          <div className="card__overlay">
            <div className="card__header">
              <svg className="card__arc">
                <path />
              </svg>
              <img className="card__thumb" src={image} alt="" />
              <div className="card__header-text">
                <h3 className="card__title">{name}</h3>
                {/* <span class="card__status">1 hour ago</span> */}
              </div>
            </div>
            <p className="card__description">
              <span>Actor: {actor} </span>
              <br />
              <span>Ancestry: {ancestry} </span>
              <br />
              <span>House: {house}</span>
            </p>
          </div>
        </Link>
      </li>
    </>
  );
}
