import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import loading from "./loading";
import category from "./category";
import mainForm, { mainFormSaga } from "./mainForm";
import search, { searchSaga } from "./search";

const rootReducer = combineReducers({
  category,
  mainForm,
  search,
});

export function* rootSaga() {
  yield all([mainFormSaga(), searchSaga()]);
}

export default rootReducer;
