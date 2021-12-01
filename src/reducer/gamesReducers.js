import {
  // FETCH_GAMES_FAILUAR,
  FETCH_GAMES_REQUEST,
  // FETCH_GAMES_SUCCESS,
} from "../action/gamesTypes";
const intiState = {
  popular: [],
  newGames: [],
  upcoming: [],
  search: [],
  error: "",
  loading: true,
};

const gamesReducer = (state = intiState, action) => {
  switch (action.type) {
    case FETCH_GAMES_REQUEST:
      return {
        ...state,
        loading: false,
        popular: action.payload.popular,
        newGames: action.payload.newGames,
        upcoming: action.payload.upcoming,
      };
    case "FETCH_SEARCH":
      return {
        ...state,
        search: action.payload.search,
      };
    case "CLEAR_SEARCH":
      return {
        ...state,
        search: [],
      };
    default:
      return { ...state };
  }
};

export default gamesReducer;
