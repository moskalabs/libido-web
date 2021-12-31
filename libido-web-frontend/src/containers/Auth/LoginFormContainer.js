import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeField,
  initializeForm,
  login,
  setAuthModalVisible,
} from "../../modules/auth";
import AuthTemplate from "../../components/Auth/AuthTemplate";
import LoginForm from "../../components/Auth/LoginForm";

const LoginFormContainer = () => {
  const dispatch = useDispatch();

  const form = useSelector(({ auth }) => auth.login);
  const isVisibleAuthModal = useSelector(
    ({ auth }) => auth.login.isVisibleAuthModal
  );

  const changeLoginInputValue = event => {
    const { value, name } = event.target;

    dispatch(
      changeField({
        form: "login",
        key: name,
        value,
      })
    );
  };

  const signin = event => {
    const { email, password } = form;

    dispatch(login({ email, password }));
  };

  useEffect(() => {
    dispatch(initializeForm("login"));
  }, [dispatch]);

  if (isVisibleAuthModal) {
    return (
      <AuthTemplate>
        <LoginForm
          form={form}
          changeLoginInputValue={changeLoginInputValue}
          signin={signin}
        />
      </AuthTemplate>
    );
  } else return null;
};

export default LoginFormContainer;
