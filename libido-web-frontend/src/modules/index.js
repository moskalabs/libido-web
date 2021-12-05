import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import loading from "./loading";
import auth from "./auth";
import category from "./category";
import mainForm, { mainFormSaga } from "./mainForm";

const rootReducer = combineReducers({
  loading,
  auth,
  category,
  mainForm,
});

export function* rootSaga() {
  yield all([mainFormSaga()]);
}

export default rootReducer;
