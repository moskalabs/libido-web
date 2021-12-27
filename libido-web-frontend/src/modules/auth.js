import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import { takeLatest, takeEvery } from "redux-saga/effects";
import createRequestSaga, {
  createRequestActionTypes,
} from "../lib/createRequestSaga";
import * as authAPI from "../lib/api/auth";

const CHANGE_FIELD = "auth/CHANGE_FIELD";
const INITIALIZE_FORM = "auth/INITIALIZE_FORM";

const [REGISTER, REGISTER_SUCCESS, REGISTER_FAILURE] =
  createRequestActionTypes("auth/REGISTER");

const [LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE] =
  createRequestActionTypes("auth/LOGIN");

const [DUPLICATIONCHECK, DUPLICATIONCHECK_SUCCESS, DUPLICATIONCHECK_FAILURE] =
  createRequestActionTypes("auth/DUPLICATIONCHECK");

const INITIALIZE_AVAILABLE = "auth/INITIALIZE_AVAILABLE";
const INITIALIZE_DUPLICATIONINFO = "auth/INITIALIZE_DUPLICATIONINFO";

export const changeField = createAction(
  CHANGE_FIELD,
  ({ form, key, value }) => ({
    form,
    key,
    value,
  })
);
export const initializeForm = createAction(INITIALIZE_FORM, form => form);

export const initializeAvailable = createAction(INITIALIZE_AVAILABLE);

export const register = createAction(
  REGISTER,
  ({ email, password, re_password, nickname }) => ({
    email,
    password,
    re_password,
    nickname,
  })
);
export const login = createAction(LOGIN, ({ email, password }) => ({
  email,
  password,
}));

export const initializeDuplicationInfo = createAction(
  INITIALIZE_DUPLICATIONINFO
);
export const checkInputValue = createAction(
  DUPLICATIONCHECK,
  ({ currentCheckInputAPI, currentCheckKey, currentCheckInputValue }) => ({
    currentCheckInputAPI,
    currentCheckKey,
    currentCheckInputValue,
  })
);

const registerSaga = createRequestSaga(REGISTER, authAPI.register);
const loginSaga = createRequestSaga(LOGIN, authAPI.login);

const checkInputValueSaga = createRequestSaga(
  DUPLICATIONCHECK,
  authAPI.checkInput
);

export function* authSaga() {
  yield takeLatest(REGISTER, registerSaga);
  yield takeLatest(LOGIN, loginSaga);
  yield takeEvery(DUPLICATIONCHECK, checkInputValueSaga);
}

const initialState = {
  login: {
    email: "",
    password: "",
  },
  register: {
    email: "",
    password: "",
    re_password: "",
    nickname: "",
    verificationCode: "",
    isDuplicationCheckSuccess: "",
  },
  authError: null,
};

const auth = handleActions(
  {
    [CHANGE_FIELD]: (state, { payload: { form, key, value } }) =>
      produce(state, draft => {
        draft[form][key] = value;
      }),
    [INITIALIZE_FORM]: (state, { payload: form }) => ({
      ...state,
      [form]: initialState[form],
      authError: null,
    }),
    [REGISTER_SUCCESS]: (state, { payload: { message } }) => ({
      ...state,
      message,
      authError: null,
    }),
    [REGISTER_FAILURE]: (state, { payload: error }) => ({
      ...state,
      authError: error,
    }),
    [LOGIN_SUCCESS]: (state, { payload: auth }) => ({
      ...state,
      authError: null,
      auth,
    }),
    [LOGIN_FAILURE]: (state, { payload: error }) => ({
      ...state,
      authError: error,
    }),
    [INITIALIZE_DUPLICATIONINFO]: (state, action) =>
      produce(state, draft => {
        draft.register.isDuplicationCheckSuccess = "";
        draft.authError = null;
      }),
    [DUPLICATIONCHECK_SUCCESS]: (state, { payload: { message } }) =>
      produce(state, draft => {
        draft.register.isDuplicationCheckSuccess = message;
      }),
    [DUPLICATIONCHECK_FAILURE]: (state, { payload: { response } }) => ({
      ...state,
      authError: response.data.message,
    }),
    [INITIALIZE_AVAILABLE]: state => ({
      ...state,
      isCheckSuccess: null,
    }),
  },
  initialState
);

export default auth;
