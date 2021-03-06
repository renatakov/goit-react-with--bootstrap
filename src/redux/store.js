import { createStore, combineReducers } from "redux";
import pexelReducer from "./reducers/pexelReducer";

const rootReducer = combineReducers({
  gallery: pexelReducer,
});
const preState = "";
const store = createStore(rootReducer, preState);

export default store;