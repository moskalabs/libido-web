import { createAction, handleActions } from "redux-actions";
import { takeEvery } from "redux-saga/effects";
import { produce } from "immer";
import createRequestSaga, {
  createRequestActionTypes,
} from "../lib/createRequestSaga";
import * as mainFormAPI from "../lib/api/mainForm";

const INITIALIZE_MAINFORM = "mainForm/INITIALIZE_MAINFORM";

const ISLOADED = "mainForm/ISLOADED";

const INCREASEOFFSET = "mainForm/INCREASEOFFSET";

const [CONTENT, CONTENT_SUCCESS, CONTENT_FAILURE] =
  createRequestActionTypes("mainForm/CONTENT");

const [ROOMS, ROOMS_SUCCESS, ROOMS_FAILURE] =
  createRequestActionTypes("mainForm/ROOMS");

const [FRIENDLIST, FRIENDLIST_SUCCESS, FRIENDLIST_FAILURE] =
  createRequestActionTypes("mainForm/FRIENDLIST");

const [FRIENDS, FRIENDS_SUCCESS, FRIENDS_FAILURE] =
  createRequestActionTypes("mainForm/FRIENDS");

export const initializeMainForm = createAction(INITIALIZE_MAINFORM);

export const content = createAction(CONTENT, ({ sort, currentOffset }) => ({
  sort,
  currentOffset,
}));

export const rooms = createAction(ROOMS, ({ sort, currentOffset }) => ({
  sort,
  currentOffset,
}));

export const friendList = createAction(FRIENDLIST);

export const friends = createAction(FRIENDS, currentOffset => currentOffset);

export const isLoaded = createAction(ISLOADED);

export const increaseOffset = createAction(INCREASEOFFSET);

const contentSaga = createRequestSaga(CONTENT, mainFormAPI.content);
const roomsSaga = createRequestSaga(ROOMS, mainFormAPI.rooms);
const friendListSaga = createRequestSaga(FRIENDLIST, mainFormAPI.friendList);
const friendsSaga = createRequestSaga(FRIENDS, mainFormAPI.friends);

export function* mainFormSaga() {
  yield takeEvery(CONTENT, contentSaga);
  yield takeEvery(ROOMS, roomsSaga);
  yield takeEvery(FRIENDLIST, friendListSaga);
  yield takeEvery(FRIENDS, friendsSaga);
}

const initialState = {
  contentList: [],
  roomList: [],
  recommendFriendList: [],
  friendsContentList: [],
  contentListError: null,
  roomListError: null,
  recommendFriendListError: null,
  friendsContentListError: null,
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
    [FRIENDLIST_SUCCESS]: (state, { payload: { message } }) =>
      produce(state, draft => {
        draft.recommendFriendList = state.recommendFriendList.concat(
          Array(message)
        );
        draft.recommendFriendListError = null;
      }),
    [FRIENDLIST_FAILURE]: (state, { payload: error }) => ({
      ...state,
      recommendFriendListError: error,
    }),
    [FRIENDS_SUCCESS]: (state, { payload: { message } }) =>
      produce(state, draft => {
        draft.friendsContentList = state.friendsContentList.concat(message);
        draft.friendsContentListError = null;
      }),
    [FRIENDS_FAILURE]: (state, { payload: error }) => ({
      ...state,
      friendsContentListError: error,
    }),
    [ISLOADED]: (state, action) => ({
      ...state,
      isLoaded: !state.isLoaded,
    }),
    [INCREASEOFFSET]: (state, action) => ({
      ...state,
      currentOffset: state.currentOffset + 1,
    }),
  },
  initialState
);

export default mainForm;
