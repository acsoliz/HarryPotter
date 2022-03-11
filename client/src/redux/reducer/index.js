import { GET_CHARACTERS, FILTER_ANCESTRY, FILTER_HOUSE } from '../actions';
const initialState = {
	characters    : [],
	charactersAux : []
};

export default function rootReducer(state = initialState, action) {
	switch (action.type) {
		case GET_CHARACTERS:
			return {
				...state,
				characters    : action.payload,
				charactersAux : action.payload
			};
		case FILTER_ANCESTRY:
			const allCharacters = state.charactersAux;
			const charsFiltered =

					action.payload === 'All' ? allCharacters :
					allCharacters.filter((el) => el.ancestry === action.payload);
			return {
				...state,
				characters:charsFiltered
			};
		case FILTER_HOUSE:
			

		default:
			return state;
	}
}
