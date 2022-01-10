import { createAction, handleActions } from "redux-actions";
import { takeEvery } from "redux-saga/effects";
import createRequestSaga, {
  createRequestActionTypes,
} from "../lib/createRequestSaga";
import * as friendsAPI from "../lib/api/friends";
import produce from "immer";

const INITIALIZE_FRIENDS = "friends/INITIALIZE_FRIENDS";

const INCREASE_FRIENDS_OFFSET = "friends/INCREASE_FRIENDS_OFFSET";

const [FRIENDLIST, FRIENDLIST_SUCCESS, FRIENDSLIST_FAILURE] =
  createRequestActionTypes("friends/FRIENDLIST");

const [FRIENDSCONTENT, FRIENDSCONTENT_SUCCESS, FRIENDSCONTENT_FAILURE] =
  createRequestActionTypes("friends/FRIENDSCONTENT");

export const initializeFriends = createAction(INITIALIZE_FRIENDS);

export const friendList = createAction(
  FRIENDLIST,
  currentOffset => currentOffset
);

export const friendsContent = createAction(
  FRIENDSCONTENT,
  currentOffset => currentOffset
);

export const increaseFriendsOffset = createAction(
  INCREASE_FRIENDS_OFFSET,
  form => form
);

const friendListSaga = createRequestSaga(FRIENDLIST, friendsAPI.friendList);
const friendsContentSaga = createRequestSaga(
  FRIENDSCONTENT,
  friendsAPI.friendsContent
);

export function* friendsSaga() {
  yield takeEvery(FRIENDLIST, friendListSaga);
  yield takeEvery(FRIENDSCONTENT, friendsContentSaga);
}

const initialState = {
  recommendFriendList: {
    list: [],
    currentOffset: 1,
  },
  friendsContentList: {
    list: [],
    currentOffset: 1,
  },
  recommendFriendListError: null,
  friendsContentListError: null,
};

const friends = handleActions(
  {
    [INITIALIZE_FRIENDS]: state => initialState,
    [FRIENDLIST_SUCCESS]: (state, { payload: { message } }) =>
      produce(state, draft => {
        draft.recommendFriendList.list = state.recommendFriendList.list.concat(
          Array(message)
        );
        draft.recommendFriendListError = null;
      }),
    [FRIENDSLIST_FAILURE]: (state, { payload: error }) => ({
      ...state,
      recommendFriendListError: error,
    }),
    [FRIENDSCONTENT_SUCCESS]: (state, { payload: { message } }) =>
      produce(state, draft => {
        draft.friendsContentList.list =
          state.friendsContentList.list.concat(message);
        draft.friendsContentListError = null;
      }),
    [FRIENDSCONTENT_FAILURE]: (state, { payload: error }) => ({
      ...state,
      recommendFriendListError: error,
    }),
    [INCREASE_FRIENDS_OFFSET]: (state, { payload: form }) =>
      produce(state, draft => {
        draft[form].currentOffset = state[form].currentOffset + 1;
      }),
  },
  initialState
);

export default friends;
