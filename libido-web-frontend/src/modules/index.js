import { combineReducers } from "redux";
import loading from "./loading";
import auth from "./auth";
import category from "./category";

const rootReducer = combineReducers({
  loading,
  auth,
  category,
});

export default rootReducer;
