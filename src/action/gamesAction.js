import {
  // FETCH_GAMES_FAILUAR,
  FETCH_GAMES_REQUEST,
  // FETCH_GAMES_SUCCESS,
} from "./gamesTypes";
import { popularGamesURL, upcomingGamesURL, newGamesURL } from "../api";
import axios from "axios";
export const fetchGames = () => {
  return {
    type: FETCH_GAMES_REQUEST,
  };
};
// export const fetchSuccess = (popularGames) => {
//   return {
//     type: FETCH_GAMES_SUCCESS,
//     payload: {
//       popular: popularGames,
//     },
//   };
// };
// export const fetchFailuar = (error) => {
//   return {
//     type: FETCH_GAMES_FAILUAR,
//     payload: error,
//   };
// };

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
