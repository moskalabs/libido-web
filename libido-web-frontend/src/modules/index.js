import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import loading from "./loading";
import auth, { authSaga } from "./auth";
import category from "./category";
import mainForm, { mainFormSaga } from "./mainForm";
import search, { searchSaga } from "./search";

const rootReducer = combineReducers({
  loading,
  auth,
  category,
  mainForm,
  search,
});

export function* rootSaga() {
  yield all([authSaga(), mainFormSaga(), searchSaga()]);
}

export default rootReducer;
