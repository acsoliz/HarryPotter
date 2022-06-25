import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { getCharDetail } from "../../redux/actions";
import "./Detail.css";

const Detail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const [wand, setWand] = useState(null);

  useEffect(() => {
    // dispatch(clearDetail());
    if (character?.hasOwnProperty("wand")) {
      console.log("true");
      setWand(JSON.parse(character.wand));
      const wand2 = JSON.parse(character.wand);
      console.log(wand, wand2);
    }
    dispatch(getCharDetail(id));
  }, []);

  const charDetail = useSelector((state) => state.charDetail);
  const character = charDetail[0];
  // const wand = JSON.parse(character.wand);

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
        {/* <div className="card--detail--container"> */}
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
                  {/* <h3>wood: {character.wand}</h3> */}
                </div>
              </div><br/>
              {wand ? (
                <div>
                  <div>
                    <h3>wand</h3>
                  </div>
                  <h3>wood: {wand.wood}</h3>
                  <h3>core: {wand.core}</h3>
                  <h3>length: {wand.length}</h3>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
        {/* </div> */}
      </div>
    </>
  );
};

export default Detail;
