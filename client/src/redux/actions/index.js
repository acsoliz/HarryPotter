import axios from "axios";
export const FILTER_ANCESTRY = "FILTER_ANCESTRY";
export const GET_CHARACTERS = "GET_CHARACTERS";
export const FILTER_HOUSE = "FILTER_HOUSE";
export const BY_ALPH = "BY_ALPH";
export const GET_BY_NAME = "GET_BY_NAME";
export const GET_DETAIL = "GET_DETAIL";
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

export const findCharByName = (name) => {
  return async (dispatch) => {
    try {
      const json = await axios.get(URL_GET, {
        params: {
          name: name,
        },
      });
      return dispatch({
        type: GET_BY_NAME,
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getCharDetail = (id) => {
  return async (dispatch) => {
    try {
      const {data} = await axios.get(`${URL_GET}/filterId/${id}`);
      console.log(data);
      return dispatch({
        type: GET_DETAIL,
        payload: data,
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

export const sortByAlph = (payload) => {
  return {
    type: BY_ALPH,
    payload,
  };
};
