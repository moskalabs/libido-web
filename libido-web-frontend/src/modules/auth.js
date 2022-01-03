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

const [
  VERIFICATIONCODESEND,
  VERIFICATIONCODESEND_SUCCESS,
  VERIFICATIONCODESEND_FAILURE,
] = createRequestActionTypes("auth/VERIFICATIONCODESEND");

const INITIALIZE_DUPLICATIONINFO = "auth/INITIALIZE_DUPLICATIONINFO";

const SET_AUTHMODALVISIBLE = "auth/SET_AUTHMODALVISIBLE";

const SET_CURRENTADVERTISEACCESS = "auth/SET_CURRENTADVERTISEACCESS";

export const changeField = createAction(
  CHANGE_FIELD,
  ({ form, key, value }) => ({
    form,
    key,
    value,
  })
);
export const initializeForm = createAction(INITIALIZE_FORM, form => form);

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
export const verificationCodeSend = createAction(
  VERIFICATIONCODESEND,
  email => email
);

export const setAuthModalVisible = createAction(
  SET_AUTHMODALVISIBLE,
  form => form
);

export const setCurrentAdvertiseAccess = createAction(
  SET_CURRENTADVERTISEACCESS,
  isCheckValue => isCheckValue
);

const checkInputValueSaga = createRequestSaga(
  DUPLICATIONCHECK,
  authAPI.checkInput
);
const verificationCodeSendSaga = createRequestSaga(
  VERIFICATIONCODESEND,
  authAPI.verificationCodeSend
);

const registerSaga = createRequestSaga(REGISTER, authAPI.register);
const loginSaga = createRequestSaga(LOGIN, authAPI.login);

export function* authSaga() {
  yield takeLatest(REGISTER, registerSaga);
  yield takeLatest(LOGIN, loginSaga);
  yield takeEvery(DUPLICATIONCHECK, checkInputValueSaga);
  yield takeEvery(VERIFICATIONCODESEND, verificationCodeSendSaga);
}

const initialState = {
  login: {
    email: "",
    password: "",
    isVisibleAuthModal: false,
  },
  register: {
    email: "",
    password: "",
    re_password: "",
    nickname: "",
    isDuplicationCheckSuccess: "",
    verificationCode: "",
    isVisibleAuthModal: false,
    is_receive_email: false,
  },
  token: "",
  message: "",
  authError: null,
};

const auth = handleActions(
  {
    [INITIALIZE_FORM]: (state, { payload: form }) => ({
      ...state,
      [form]: initialState[form],
      message: "",
      authError: null,
    }),
    [CHANGE_FIELD]: (state, { payload: { form, key, value } }) =>
      produce(state, draft => {
        draft[form][key] = value;
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
    [SET_CURRENTADVERTISEACCESS]: (state, { payload: isCheckValue }) =>
      produce(state, draft => {
        draft.register.is_receive_email = isCheckValue;
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
    [VERIFICATIONCODESEND_SUCCESS]: (state, { payload: { auth_number } }) =>
      produce(state, draft => {
        draft.register.verificationCode = auth_number;
      }),
    [LOGIN_SUCCESS]: (state, { payload: { ACCESS_TOKEN } }) => ({
      ...state,
      message: "SUCCESS",
      token: ACCESS_TOKEN,
      authError: null,
    }),
    [LOGIN_FAILURE]: (state, { payload: error }) => ({
      ...state,
      authError: error,
    }),
    [SET_AUTHMODALVISIBLE]: (state, { payload: form }) =>
      produce(state, draft => {
        draft[form].isVisibleAuthModal = !state[form].isVisibleAuthModal;
      }),
  },
  initialState
);

export default auth;
