import { createAction, handleActions } from "redux-actions";
import { takeEvery } from "redux-saga/effects";
import createRequestSaga, {
  createRequestActionTypes,
} from "../lib/createRequestSaga";
import * as mainFormAPI from "../lib/api/mainForm";

const INITIALIZE_MAINFORM = "mainForm/INITIALIZE_MAINFORM";

const [CONTENT, CONTENT_SUCCESS, CONTENT_FAILURE] =
  createRequestActionTypes("mainForm/CONTENT");

const [ROOMS, ROOMS_SUCCESS, ROOMS_FAILURE] =
  createRequestActionTypes("mainForm/ROOMS");

export const initializeMainForm = createAction(INITIALIZE_MAINFORM);

export const content = createAction(
  CONTENT,
  ({ querySort, categorySort = "libido" }) => ({
    querySort,
    categorySort,
  })
);

export const rooms = createAction(
  ROOMS,
  ({ querySort, categorySort = "libido" }) => ({
    querySort,
    categorySort,
  })
);

const contentSaga = createRequestSaga(CONTENT, mainFormAPI.content);
const roomsSaga = createRequestSaga(ROOMS, mainFormAPI.rooms);

export function* mainFormSaga() {
  yield takeEvery(CONTENT, contentSaga);
  yield takeEvery(ROOMS, roomsSaga);
}

const initialState = {
  contents: [],
  contentsError: null,
};

const mainForm = handleActions(
  {
    [INITIALIZE_MAINFORM]: state => initialState,
    [CONTENT_SUCCESS]: ({ contents }, { payload: result }) => ({
      contents: contents.concat(result),
      contentsError: null,
    }),
    [CONTENT_FAILURE]: (state, { payload: { name } }) => ({
      ...state,
      contentsError: name,
    }),
    [ROOMS_SUCCESS]: ({ contents }, { payload: result }) => ({
      contents: contents.concat(result),
      contentsError: null,
    }),
    [ROOMS_FAILURE]: (state, { payload: { name } }) => ({
      ...state,
      contentsError: name,
    }),
  },
  initialState
);

export default mainForm;
