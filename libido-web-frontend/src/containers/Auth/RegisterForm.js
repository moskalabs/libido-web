import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeField,
  initializeForm,
  register,
  phoneNumberAction,
} from "../../modules/auth";
import AuthForm from "../../components/Auth/AuthForm";
import { check } from "../../modules/user";
import { createStore } from "redux";

const RegisterForm = () => {
  const dispatch = useDispatch();
  const { form, message, phoneNumber } = useSelector(({ auth, user }) => ({
    form: auth.register,
    message: auth.message,
    phoneNumber: auth.register.phone_number,
    user: user.user,
  }));

  //인풋 변경 이벤트
  const onChange = e => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        form: "register",
        key: name,
        value,
      })
    );
  };

  // const abc =
  // const reducer = (state, action) => {
  //   return state;
  // };
  // const store = createStore(() => reducer(abc));
  // console.log(store.getState());

  //폼 등록 이벤트 핸들러
  const onSubmit = e => {
    e.preventDefault();
    const { email, password, re_password, phone_number, nickname } = form;
    if (password !== re_password) return;
    dispatch(
      register({ email, password, re_password, phone_number, nickname })
    );
  };

  const submitPhoneNumber = e => {
    const fullPhoneNumber = 11;
    const currentPhoneNumber = phoneNumber.length;
    console.log("핸드폰 번호 보내기");
    if (fullPhoneNumber !== currentPhoneNumber) return;
    dispatch(phoneNumberAction(phoneNumber));
  };

  //컴포넌트가 처음 렌더링될 때 form을 초기화함
  useEffect(() => {
    dispatch(initializeForm("register"));
  }, [dispatch]);

  // 회원가입 성공,실패 처리
  useEffect(() => {
    if (message === "SUCCESS") {
      console.log("회원가입 성공");
      console.log(message);
      // dispatch(check());
    } else {
      console.log("오류 발생");
      console.log(message);
      // dispatch(check);
    }
  }, [message, dispatch]);

  // useEffect(() => {
  //   if (user) {
  //     console.log("check API 성공");
  //     console.log(user);₩
  //   }
  // }, [user]);

  return (
    <AuthForm
      type="register"
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
      submitPhoneNumber={submitPhoneNumber}
    />
  );
};

export default RegisterForm;
