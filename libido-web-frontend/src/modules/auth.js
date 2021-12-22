// import { createAction, handleActions } from "redux-actions";
// import produce from "immer";
// import { takeLatest, takeEvery } from "redux-saga/effects";
// import * as authAPI from "../lib/api/auth";

// const CHANGE_FIELD = "auth/CHANGE_FIELD";
// const INITIALIZE_FORM = "auth/INITIALIZE_FORM";

// const [REGISTER, REGISTER_SUCCESS, REGISTER_FAILURE] =
//   createRequestActionTypes("auth/REGISTER");

// const [LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE] =
//   createRequestActionTypes("auth/LOGIN");

// //중복체크
// const [CHECK, CHECK_SUCCESS, CHECK_FAILURE] =
//   createRequestActionTypes("auth/CHECK");

// const PHONENUMBER = "auth/PHONE_NUMBER";
// // const IDCHECK = "auth/IDCHECK";

// const INITIALIZE_AVAILABLE = "auth/INITIALIZE_AVAILABLE";

// export const changeField = createAction(
//   CHANGE_FIELD,
//   ({ form, key, value }) => ({
//     form, //register, login
//     key, //email,password, re_password,phone_number,verificationCode
//     value, //실제 바꾸려는 값
//   })
// );
// export const initializeForm = createAction(INITIALIZE_FORM, form => form);

// export const initializeAvailable = createAction(INITIALIZE_AVAILABLE);

// export const register = createAction(
//   REGISTER,
//   ({ email, password, re_password, phone_number, nickname }) => ({
//     email,
//     password,
//     re_password,
//     phone_number,
//     nickname,
//   })
// );
// export const login = createAction(LOGIN, ({ email, password }) => ({
//   email,
//   password,
// }));

// export const phoneNumberAction = createAction(
//   PHONENUMBER,
//   phoneNumber => phoneNumber
// );

// export const checkInputValue = createAction(
//   CHECK,
//   currentCheckInputValue => currentCheckInputValue
// );

// //사가 생성
// const registerSaga = createRequestSaga(REGISTER, authAPI.register);
// const loginSaga = createRequestSaga(LOGIN, authAPI.login);
// const phoneNumberSaga = createRequestSaga(PHONENUMBER, authAPI.phoneNumber);
// const checkInputValueSaga = createRequestSaga(CHECK, authAPI.checkInput);

// export function* authSaga() {
//   yield takeLatest(REGISTER, registerSaga);
//   yield takeLatest(LOGIN, loginSaga);
//   yield takeLatest(PHONENUMBER, phoneNumberSaga);
//   yield takeEvery(CHECK, checkInputValueSaga);
// }

// const initialState = {
//   login: {
//     email: "",
//     password: "",
//   },
//   register: {
//     email: "",
//     password: "",
//     re_password: "",
//     nickname: "",
//     phone_number: "",
//     verificationCode: "",
//   },

//   message: "",
//   authError: null,
//   isCheckSuccess: null,
// };

// const auth = handleActions(
//   {
//     [CHANGE_FIELD]: (state, { payload: { form, key, value } }) =>
//       produce(state, draft => {
//         draft[form][key] = value;
//       }),
//     [INITIALIZE_FORM]: (state, { payload: form }) => ({
//       ...state,
//       [form]: initialState[form],
//       authError: null, //폼 전환시 회원 인증 에러 초기화..?
//     }),
//     //회원가입 성공
//     [REGISTER_SUCCESS]: (state, { payload: { message } }) => ({
//       ...state,
//       message,
//       authError: null,
//     }),
//     //회원가입 실패
//     [REGISTER_FAILURE]: (state, { payload: error }) => ({
//       ...state,
//       authError: error,
//     }),
//     //로그인 성공
//     [LOGIN_SUCCESS]: (state, { payload: auth }) => ({
//       ...state,
//       authError: null,
//       auth,
//     }),
//     //로그인 실패
//     [LOGIN_FAILURE]: (state, { payload: error }) => ({
//       ...state,
//       authError: error,
//     }),
//     //중복체크
//     [CHECK_SUCCESS]: (state, { payload: { message } }) => ({
//       ...state,
//       isCheckSuccess: message,
//     }),

//     [INITIALIZE_AVAILABLE]: state => ({
//       ...state,
//       isCheckSuccess: null,
//     }),
//   },
//   initialState
// );

// export default auth;
