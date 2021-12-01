import { combineReducers } from "redux";
import gamesReducer from "./gamesReducers";
import detailReducer from "./detailReducer";
const rootReducers = combineReducers({
  games: gamesReducer,
  detail: detailReducer,
});

export default rootReducers;
