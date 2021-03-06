// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   changeField,
//   initializeForm,
//   register,
//   phoneNumberAction,
//   checkInputValue,
//   initializeAvailable,
// } from "../../modules/auth";
// import AuthForm from "../../components/Auth/AuthForm";
// import { check } from "../../modules/user";
// import { createStore } from "redux";

// const RegisterForm = () => {
//   const dispatch = useDispatch();
//   const { form, message, checkResult, phoneNumber } = useSelector(
//     ({ auth, user }) => ({
//       form: auth.register,
//       message: auth.message,
//       phoneNumber: auth.register.phone_number,
//       checkResult: auth.isCheckSuccess,
//       user: user.user,
//     })
//   );

//   const isAvailable = checkResult && checkResult.split("_")[0];

//   // isAvailable dispatch(initializeAvailable());q

//   console.log(isAvailable, checkResult);

//   //인풋 변경 이벤트
//   const onChange = e => {
//     const { value, name } = e.target;
//     dispatch(
//       changeField({
//         form: "register",
//         key: name,
//         value,
//       })
//     );
//   };

//   //폼 등록 이벤트 핸들러
//   const onSubmit = e => {
//     e.preventDefault();
//     const { email, password, re_password, phone_number, nickname } = form;
//     if (password !== re_password) return;
//     dispatch(
//       register({
//         email,
//         password,
//         re_password,
//         phone_number,
//         nickname,
//       })
//     );
//   };

//   const sortCheckInputValue = currentCheckButtonType => {
//     let checkInputValue;
//     switch (currentCheckButtonType) {
//       case "nicknameCheckButton":
//         checkInputValue = form.nickname;
//         break;
//       case "idCheckButton":
//         checkInputValue = form.email;
//         break;
//       default:
//         break;
//     }
//     return checkInputValue;
//   };

//   const inputValueCheck = e => {
//     const currentCheckButtonType = e.target.dataset.check;
//     const currentCheckInputValue = sortCheckInputValue(currentCheckButtonType);
//     dispatch(checkInputValue(currentCheckInputValue));
//   };

//   const submitPhoneNumber = e => {
//     const fullPhoneNumber = 11;
//     const currentPhoneNumber = phoneNumber.length;
//     console.log("핸드폰 번호 보내기");
//     if (fullPhoneNumber !== currentPhoneNumber) return;
//     dispatch(phoneNumberAction(phoneNumber));
//   };

//   //컴포넌트가 처음 렌더링될 때 form을 초기화함
//   useEffect(() => {
//     dispatch(initializeForm("register"));
//   }, [dispatch]);

//   // 회원가입 성공,실패 처리
//   useEffect(() => {
//     if (message === "SUCCESS") {
//       console.log("회원가입 성공");
//       console.log(message);
//       // dispatch(check());
//     } else {
//       console.log("오류 발생");
//       console.log(message);
//       // dispatch(check);
//     }
//   }, [message, dispatch]);

//   return (
//     <AuthForm
//       type="register"
//       form={form}
//       inputValueCheck={inputValueCheck}
//       isAvailable={isAvailable}
//       onChange={onChange}
//       onSubmit={onSubmit}
//       submitPhoneNumber={submitPhoneNumber}
//     />
//   );
// };

// export default RegisterForm;
