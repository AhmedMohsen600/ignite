import { createStore, applyMiddleware, compose } from "redux";
import rootReducers from "../reducer";
import thunk from "redux-thunk";
const composeEnchancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducers,
  composeEnchancer(applyMiddleware(thunk))
);
export default store;
