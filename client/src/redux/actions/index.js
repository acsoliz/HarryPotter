import axios from "axios";
export const FILTER_ANCESTRY = "FILTER_ANCESTRY";
export const GET_CHARACTERS = "GET_CHARACTERS";
export const FILTER_HOUSE = "FILTER_HOUSE";
export const BY_ALPH = "BY_ALPH";
export const GET_BY_NAME = "GET_BY_NAME";
export const GET_DETAIL = "GET_DETAIL";
export const NEW_ACTIVITY = "NEW_ACTIVITY";
export const GET_ACTIVITIES = "GET_ACTIVITIES";
export const FILTER_NAME = "FILTER_NAME";
const URL_GET = "/characters";
const URL_ACTIVITIES = "/activities";

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
      const { data } = await axios.get(`${URL_GET}/filterId/${id}`);
      // console.log(data)
      const char = data[0];
      char.wand = JSON.parse(data[0].wand);

      return dispatch({
        type: GET_DETAIL,
        payload: char,
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

export const createActivity = (activity) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(`${URL_ACTIVITIES}/create`, activity);
      console.log(data);
      return dispatch({
        type: NEW_ACTIVITY,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
export const getActivities = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(URL_ACTIVITIES);
      console.log(data);
      return dispatch({
        type: GET_ACTIVITIES,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
export const filterName = (name) => {
  return (dispatch) =>
    dispatch({
      type: FILTER_NAME,
      payload: name,
    });
};
