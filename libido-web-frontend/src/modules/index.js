import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import loading from "./loading";
import auth, { authSaga } from "./auth";
import category from "./category";
import mainForm, { mainFormSaga } from "./mainForm";
import friends, { friendsSaga } from "./friends";
import search, { searchSaga } from "./search";

const rootReducer = combineReducers({
  loading,
  auth,
  category,
  mainForm,
  friends,
  search,
});

export function* rootSaga() {
  yield all([authSaga(), mainFormSaga(), friendsSaga(), searchSaga()]);
}

export default rootReducer;
