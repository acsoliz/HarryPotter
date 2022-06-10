import {
  GET_CHARACTERS,
  FILTER_ANCESTRY,
  FILTER_HOUSE,
  BY_ALPH,
  GET_BY_NAME,
  GET_DETAIL,
  NEW_ACTIVITY,
  GET_ACTIVITIES,
} from "../actions";
const initialState = {
  characters: [],
  charactersAux: [],
  filters: [],
  charDetail: [],
  activities: [],
};

export default function rootReducer(state = initialState, action) {
  const allCharacters = state.charactersAux;
  switch (action.type) {
    case GET_CHARACTERS:
      return {
        ...state,
        characters: action.payload,
        charactersAux: action.payload,
      };
    case GET_BY_NAME:
      return {
        ...state,
        characters: action.payload,
      };
    case GET_DETAIL:
      return {
        ...state,
        charDetail: action.payload,
      };

    //-----------------------------
    case FILTER_ANCESTRY:
      const charsByAncestry = allCharacters;
      const charsFiltered =
        action.payload === "All"
          ? charsByAncestry
          : charsByAncestry.filter((el) => el.ancestry === action.payload);
      return {
        ...state,
        characters: charsFiltered,
        filters: charsFiltered,
      };
    case FILTER_HOUSE:
      if (!state.filters[0]) {
        const charsByHouse = allCharacters;
        const charsFilteredHouse =
          action.payload === "All"
            ? charsByHouse
            : charsByHouse.filter((el) => el.house === action.payload);
        return {
          ...state,
          characters: charsFilteredHouse,
        };
      } else {
        const filtereds = state.filters;
        let filtersByHouse =
          action.payload === "All"
            ? filtereds
            : filtereds.filter((el) => el.house === action.payload);
        return {
          ...state,
          characters: filtersByHouse,
        };
      }
    case BY_ALPH:
      const byAlph =
        action.payload === "a-z"
          ? state.characters.sort((a, b) => {
              if (a.name > b.name) {
                return 1;
              }
              if (a.name < b.name) {
                return -1;
              }
              return 0;
            })
          : state.characters.sort((a, b) => {
              if (a.name > b.name) {
                return -1;
              }
              if (a.name < b.name) {
                return 1;
              }
              return 0;
            });
      console.log("Seberia estar ordenado", byAlph);
      return {
        ...state,
        characters: byAlph,
      };
    case NEW_ACTIVITY:
      return {
        ...state,
      };
    case GET_ACTIVITIES:
      return {
        ...state,
        activities: action.payload,
      };

    default:
      return state;
  }
}

// case FILTER_HOUSE:
//       if (!state.filters[0]) {
//         const charsByHouse = allCharacters;
//         const charsFilteredHouse =
//           action.payload === "All"
//             ? charsByHouse
//             : charsByHouse.filter((el) => el.house === action.payload);
//         console.log(charsFilteredHouse); //[elementos filtrados por casa]
//         return {
//           ...state,
//           characters: charsFilteredHouse,
//           filters: charsFilteredHouse,
//         };
//       } else {
//         const filtereds = state.filters;
//         let filtersByHouseAndAncestry =
//           action.payload === "All"
//             ? filtereds
//             : filtereds.filter((el) => el.house === action.payload);
//         return {
//           ...state,
//           characters: filtersByHouseAndAncestry,
//           filters: filtersByHouseAndAncestry,
//         };
//       }

//     case FILTER_ANCESTRY:
//       if (!state.filters[0]) {
//         const charsByAncestry = allCharacters;
//         const charsFiltered =
//           action.payload === "All"
//             ? charsByAncestry
//             : charsByAncestry.filter((el) => el.ancestry === action.payload);
//         return {
//           ...state,
//           characters: charsFiltered,
//           filters: charsFiltered,
//         };
//       } else {

//         const charsByAncestryAndHouse = state.filters;
//         const charsFilteredByAncHouse =
//           action.payload === "All"
//             ? charsByAncestryAndHouse
//             : charsByAncestryAndHouse.filter((el) => el.ancestry === action.payload);
//         return {
//           ...state,
//           characters: charsFilteredByAncHouse,
//           filters: charsFilteredByAncHouse,
//         };
//       }
