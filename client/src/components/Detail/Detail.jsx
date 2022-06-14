import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { getCharDetail } from "../../redux/actions";
import "./Detail.css";

const Detail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    // dispatch(clearDetail());
    dispatch(getCharDetail(id));
  }, [dispatch]);

  const charDetail = useSelector((state) => state.charDetail);
  const character = charDetail[0];
  // const wand = JSON.parse(character.wand);
  // console.log(JSON.parse(character.wand));
  console.log(character);

  if (!character) {
    return (
      <div>
        <h1>Loading....</h1>
      </div>
    );
  }

  return (
    <>
      <div className="detail--container">
        <div className="btn-cont-volver">
          <Link to="/main" className="link-button">
            <button className="custom-btn btn-7">volver</button>
          </Link>
        </div>
        <div className="card--detail--container">
          <div className="profile-card">
            <div>
              <h1 className="character--name">{character.name}</h1>
            </div>
            <div className="div-detail-container">
              <div className="div-image">
                <img src={character.image} className="img-character" />
              </div>
              <div className="div-image-text">
                
                <div>
                  <h3>Ancestry: {character.ancestry}</h3>
                </div>
                <div>
                  <h3>House: {character.house}</h3>
                </div>
                <div>
                  <h3>species: {character.species}</h3>
                </div>
                <div>
                  <h3>actor: {character.actor}</h3>
                </div>
                <div>
                  <h3>wand: {character.wand}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
