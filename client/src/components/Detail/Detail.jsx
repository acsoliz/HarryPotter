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
  //   console.log(JSON.parse(character.wand));

  if (!character) {
    return (
      <div>
        <h1>Loading....</h1>
      </div>
    );
  }

  return (
    <>
      <div>
        <div className="btn-container">
          <Link to="/main" className="link-button">
            <button class="custom-btn btn-7">volver</button>
          </Link>
        </div>
        <div>
          <aside className="profile-card">
            <div>
              <h1>{character.name}</h1>
              <h1>{character.ancestry}</h1>
              <h1>{character.house}</h1>
              <h1>{character.actor}</h1>
              <img src={character.image} />
            </div>
            {/* <!-- bit of a bio; who are you? --> */}
          </aside>
        </div>
        <div>
          <aside className="profile-card">
            <div>
              <h1>{character.name}</h1>
              <h1>{character.ancestry}</h1>
              <h1>{character.house}</h1>
              <h1>{character.actor}</h1>
              <img src={character.image} />
            </div>
            {/* <!-- bit of a bio; who are you? --> */}
          </aside>
        </div>
      </div>
    </>
  );
};

export default Detail;
