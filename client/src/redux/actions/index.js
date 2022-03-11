import axios from 'axios';
export const GET_CHARACTERS = 'GET_CHARACTERS';
const URL_GET = 'http://localhost:3001/characters';
export const FILTER_ANCESTRY = 'FILTER_ANCESTRY';
export const FILTER_HOUSE = 'FILTER_HOUSE';

export const getAllChars = () => {
	return async (dispatch) => {
		try {
			const json = await axios.get(URL_GET);
			return dispatch({
				type    : GET_CHARACTERS,
				payload : json.data
			});
		} catch (error) {
			console.log(error);
		}
	};
};

export const filterAncestry = (payload) => {
	return (dispatch) => dispatch({
			type    : FILTER_ANCESTRY,
			payload : payload
		});
};

export const filterHouse = (payload) => {
	return (dispatch) => dispatch({
			type    : FILTER_HOUSE,
			payload : payload
		});
};