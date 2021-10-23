import { combineReducers } from "redux";
import App from "./app";
import Articles from "./articles";

const RootReducer = combineReducers({
  app: App,
  articles: Articles,
});

export default RootReducer;
