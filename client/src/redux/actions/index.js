import axios from "axios";
export const FILTER_ANCESTRY = "FILTER_ANCESTRY";
export const GET_CHARACTERS = "GET_CHARACTERS";
export const FILTER_HOUSE = "FILTER_HOUSE";
export const BY_ALPH = "BY_ALPH";
const URL_GET = "http://localhost:3001/characters";

export const getAllChars = () => {
  return async (dispatch) => {
    try {
      const json = await axios.get(URL_GET);
      return dispatch({
        type: GET_CHARACTERS,
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const filterAncestry = (payload) => {
  return (dispatch) =>
    dispatch({
      type: FILTER_ANCESTRY,
      payload: payload,
    });
};

export const filterHouses = (payload) => {
  console.log(payload);
  return (dispatch) =>
    dispatch({
      type: FILTER_HOUSE,
      payload: payload,
    });
};

export const sortByAlph=(payload) =>{
  return {
    type: BY_ALPH,
    payload,
  };
}
