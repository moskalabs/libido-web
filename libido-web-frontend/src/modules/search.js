import produce from "immer";
import { createAction, handleActions } from "redux-actions";
import { takeLatest } from "redux-saga/effects";
import createRequestSaga, {
  createRequestActionTypes,
} from "../lib/createRequestSaga";
import * as searchAPI from "../lib/api/search";

const CHANGE_FIELD = "search/CHANGE_FIELD";
const INITIALIZE_SEARCHSTATE = "search/INITIALIZE_SEARCHSTATE";
const INITIALIZE_KEYWORD = "search/INITIALIZE_KEYWORD";

const [SEARCH_KEYWORD, SEARCH_KEYWORD_SUCCESS, SEARCH_KEYWORD_FAILURE] =
  createRequestActionTypes("search/searchKeyword");

export const initializeSearchState = createAction(INITIALIZE_SEARCHSTATE);

export const initializeKeyword = createAction(INITIALIZE_KEYWORD);

export const changeField = createAction(CHANGE_FIELD, ({ form, value }) => ({
  form,
  value,
}));

export const searchCurrentKeyword = createAction(
  SEARCH_KEYWORD,
  value => value
);

const searchCurrentKeywordSaga = createRequestSaga(
  SEARCH_KEYWORD,
  searchAPI.searchKeyword
);

export function* searchSaga() {
  yield takeLatest(SEARCH_KEYWORD, searchCurrentKeywordSaga);
}

const initialState = {
  keyword: "",
  contents: [],
  token: "",
  searchError: null,
};

const search = handleActions(
  {
    [INITIALIZE_SEARCHSTATE]: state => initialState,
    [INITIALIZE_KEYWORD]: (state, action) => ({
      ...state,
      keyword: "",
    }),
    [CHANGE_FIELD]: (state, { payload: { form, value } }) =>
      produce(state, draft => {
        draft.keyword = value;
      }),
    [SEARCH_KEYWORD_SUCCESS]: (state, { payload: { message, page } }) =>
      produce(state, draft => {
        draft.contents = message;
        draft.token = page;
        draft.searchError = null;
      }),
    [SEARCH_KEYWORD_FAILURE]: (state, { payload: error }) => ({
      ...state,
      searchError: error,
    }),
  },
  initialState
);

export default search;
