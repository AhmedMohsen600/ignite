import { combineReducers } from "redux";
import gamesReducer from "./gamesReducers";
const rootReducers = combineReducers({
  games: gamesReducer,
});

export default rootReducers;
