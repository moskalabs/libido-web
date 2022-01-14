import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeField, initializeForm, login } from "../../modules/auth";
import ModalTemplate from "../../components/common/ModalTemplate";
import LoginForm from "../../components/Auth/LoginForm";

const LoginFormContainer = ({ isShowing }) => {
  const dispatch = useDispatch();

  const form = useSelector(({ auth }) => auth.login);
  const message = useSelector(({ auth }) => auth.message);

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

  const signin = () => {
    const { email, password } = form;

    dispatch(login({ email, password }));
  };

  useEffect(() => {
    dispatch(initializeForm("login"));

    message === "SUCCESS" && dispatch(initializeForm("login"));

    return () => {
      dispatch(initializeForm("login"));
    };
  }, [dispatch, message]);

  return (
    <ModalTemplate>
      <LoginForm
        form={form}
        changeLoginInputValue={changeLoginInputValue}
        signin={signin}
      />
    </ModalTemplate>
  );
};

export default LoginFormContainer;
