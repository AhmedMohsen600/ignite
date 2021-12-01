import {
  // FETCH_GAMES_FAILUAR,
  FETCH_GAMES_REQUEST,
  // FETCH_GAMES_SUCCESS,
} from "./gamesTypes";
import {
  popularGamesURL,
  upcomingGamesURL,
  newGamesURL,
  gameSearchURL,
} from "../api";
import axios from "axios";
export const fetchGames = () => {
  return {
    type: FETCH_GAMES_REQUEST,
  };
};
export const loadGames = () => async (dispatch) => {
  const popularGames = await axios.get(popularGamesURL());
  const upcomingGames = await axios.get(upcomingGamesURL());
  const newGames = await axios.get(newGamesURL());

  dispatch({
    type: FETCH_GAMES_REQUEST,
    payload: {
      popular: popularGames.data.results,
      upcoming: upcomingGames.data.results,
      newGames: newGames.data.results,
    },
  });
};
export const fetchSearch = (game_name) => async (dispatch) => {
  const searchGame = await axios.get(gameSearchURL(game_name));
  dispatch({
    type: "FETCH_SEARCH",
    payload: {
      search: searchGame.data.results,
    },
  });
};
