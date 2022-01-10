import { createAction, handleActions } from "redux-actions";
import { takeEvery } from "redux-saga/effects";
import { produce } from "immer";
import createRequestSaga, {
  createRequestActionTypes,
} from "../lib/createRequestSaga";
import * as mainFormAPI from "../lib/api/mainForm";

const INITIALIZE_MAINFORM = "mainForm/INITIALIZE_MAINFORM";

const ISLOADED = "mainForm/ISLOADED";

const INCREASE_OFFSET = "mainForm/INCREASEOFFSET";

const [CONTENT, CONTENT_SUCCESS, CONTENT_FAILURE] =
  createRequestActionTypes("mainForm/CONTENT");

const [ROOMS, ROOMS_SUCCESS, ROOMS_FAILURE] =
  createRequestActionTypes("mainForm/ROOMS");

export const initializeMainForm = createAction(INITIALIZE_MAINFORM);

export const content = createAction(CONTENT, ({ sort, currentOffset }) => ({
  sort,
  currentOffset,
}));

export const rooms = createAction(ROOMS, ({ sort, currentOffset }) => ({
  sort,
  currentOffset,
}));

export const isLoaded = createAction(ISLOADED);

export const increaseOffset = createAction(INCREASE_OFFSET);

const contentSaga = createRequestSaga(CONTENT, mainFormAPI.content);
const roomsSaga = createRequestSaga(ROOMS, mainFormAPI.rooms);

export function* mainFormSaga() {
  yield takeEvery(CONTENT, contentSaga);
  yield takeEvery(ROOMS, roomsSaga);
}

const initialState = {
  contentList: [],
  roomList: [],
  contentListError: null,
  roomListError: null,
  currentOffset: 1,
  isLoaded: false,
};

const mainForm = handleActions(
  {
    [INITIALIZE_MAINFORM]: state => initialState,
    [CONTENT_SUCCESS]: (state, { payload: { message } }) =>
      produce(state, draft => {
        draft.contentList = state.contentList.concat(message);
        draft.contentListError = null;
      }),
    [CONTENT_FAILURE]: (state, { payload: error }) => ({
      ...state,
      contentListError: error,
    }),
    [ROOMS_SUCCESS]: (state, { payload: { message } }) =>
      produce(state, draft => {
        draft.roomList = state.roomList.concat(message);
        draft.roomListError = null;
      }),
    [ROOMS_FAILURE]: (state, { payload: error }) => ({
      ...state,
      roomListError: error,
    }),
    [ISLOADED]: (state, action) => ({
      ...state,
      isLoaded: !state.isLoaded,
    }),
    [INCREASE_OFFSET]: (state, action) => ({
      ...state,
      currentOffset: state.currentOffset + 1,
    }),
  },
  initialState
);

export default mainForm;
