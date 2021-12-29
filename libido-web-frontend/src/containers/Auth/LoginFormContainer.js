import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeField, initializeForm, login } from "../../modules/auth";
import LoginForm from "../../components/Auth/LoginForm";

const LoginFormContainer = () => {
  const dispatch = useDispatch();
  const { form } = useSelector(({ auth }) => ({
    form: auth.login,
  }));

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

  return (
    <LoginForm
      form={form}
      changeLoginInputValue={changeLoginInputValue}
      signin={signin}
    />
  );
};

export default LoginFormContainer;
