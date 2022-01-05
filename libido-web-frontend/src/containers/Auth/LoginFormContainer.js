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
import BodyBlackout from "../../components/common/BodyBlackout";

const LoginFormContainer = () => {
  const dispatch = useDispatch();

  const form = useSelector(({ auth }) => auth.login);
  const isVisibleAuthModal = useSelector(
    ({ auth }) => auth.login.isVisibleAuthModal
  );
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
  }, [dispatch]);

  useEffect(() => {
    if (message === "SUCCESS" || !isVisibleAuthModal) {
      dispatch(initializeForm("login"));
    }
  }, [message, isVisibleAuthModal]);

  if (isVisibleAuthModal) {
    return (
      <>
        <BodyBlackout
          modalSort="login"
          setAuthModalVisible={setAuthModalVisible}
        />
        <AuthTemplate>
          <LoginForm
            form={form}
            changeLoginInputValue={changeLoginInputValue}
            signin={signin}
          />
        </AuthTemplate>
      </>
    );
  } else return null;
};

export default LoginFormContainer;
