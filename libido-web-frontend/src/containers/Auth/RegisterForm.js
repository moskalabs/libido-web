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

const RegisterForm = () => {
  const dispatch = useDispatch();
  const { form, auth, phoneNumber, authError } = useSelector(
    ({ auth, user }) => ({
      form: auth.register,
      auth: auth.auth,
      phoneNumber: auth.register.phone_number,
      authError: auth.authError,
      user: user.user,
    })
  );

  console.log(auth);
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

  //폼 등록 이벤트 핸들러
  const onSubmit = e => {
    e.preventDefault();
    const { email, password, re_password, phone_number, verificationCode } =
      form;
    if (password !== re_password) {
      return;
    }
    dispatch(register({ email, password, phone_number, verificationCode }));
  };

  const submitPhoneNumber = e => {
    const fullPhoneNumber = 11;
    const currentPhoneNumber = phoneNumber.length;

    if (fullPhoneNumber !== currentPhoneNumber) return;
    dispatch(phoneNumberAction(phoneNumber));
  };

  //컴포넌트가 처음 렌더링될 때 form을 초기화함
  useEffect(() => {
    dispatch(initializeForm("register"));
  }, [dispatch]);

  // 회원가입 성공,실패 처리
  useEffect(() => {
    if (authError) {
      console.log("오류 발생");
      console.log(authError);
      return;
    }
    if (auth) {
      console.log("회원가입 성공");
      console.log(auth);
      dispatch(check());
    }
  }, [auth, authError, dispatch]);

  // useEffect(() => {
  //   if (user) {
  //     console.log("check API 성공");
  //     console.log(user);
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
