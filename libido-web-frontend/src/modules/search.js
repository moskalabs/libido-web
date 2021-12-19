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

const [
  SEARCH_TOPNAVKEYWORD,
  SEARCH_TOPNAVKEYWORD_SUCCESS,
  SEARCH_TOPNAVKEYWORD_FAILURE,
] = createRequestActionTypes("search/searchTopNavKeyword");

export const initializeSearchState = createAction(INITIALIZE_SEARCHSTATE);

export const initializeKeyword = createAction(INITIALIZE_KEYWORD, form => form);

export const changeField = createAction(CHANGE_FIELD, ({ form, value }) => ({
  form,
  value,
}));

export const searchTopNavKeyword = createAction(
  SEARCH_TOPNAVKEYWORD,
  value => value
);

const searchTopNavKeywordSaga = createRequestSaga(
  SEARCH_TOPNAVKEYWORD,
  searchAPI.searchKeyword
);

export function* searchSaga() {
  yield takeLatest(SEARCH_TOPNAVKEYWORD, searchTopNavKeywordSaga);
}

const initialState = {
  topNav: {
    keyword: "",
    contents: [],
    token: "",
  },
  searchError: null,
};

const search = handleActions(
  {
    [INITIALIZE_SEARCHSTATE]: state => initialState,
    [INITIALIZE_KEYWORD]: (state, { payload: form }) =>
      produce(state, draft => {
        draft[form].keyword = "";
      }),
    [CHANGE_FIELD]: (state, { payload: { form, value } }) =>
      produce(state, draft => {
        draft[form].keyword = value;
      }),
    [SEARCH_TOPNAVKEYWORD_SUCCESS]: (state, { payload: { message } }) =>
      produce(state, draft => {
        draft.topNav.contents = state.topNav.contents.concat(message); // message 정제 과정 필요 => token값과 contents 분리
        draft.topNav.token = message;
        draft.searchError = null;
      }),
    [SEARCH_TOPNAVKEYWORD_FAILURE]: (state, { payload: error }) => ({
      ...state,
      searchError: error,
    }),
  },
  initialState
);

export default search;
