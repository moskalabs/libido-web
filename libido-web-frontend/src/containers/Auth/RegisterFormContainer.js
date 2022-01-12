import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeField,
  initializeForm,
  register,
  initializeDuplicationInfo,
  checkInputValue,
  verificationCodeSend,
  setCurrentAdvertiseAccess,
} from "../../modules/auth";
import ModalTemplate from "../../components/common/ModalTemplate";
import RegisterForm from "../../components/Auth/RegisterForm";
import {
  checkPasswordPattern,
  sortCheckInputValue,
} from "../../lib/checkAuthPattern";

const RegisterFormContainer = ({ isShowing }) => {
  const dispatch = useDispatch();

  const form = useSelector(({ auth }) => auth.register);
  const message = useSelector(({ auth }) => auth.message);

  const authError = useSelector(({ auth }) => auth.authError);

  const [isCorrectPasswordPattern, setCorrectPasswordPattern] = useState(false);

  const checkCurrentAdvertiseAccess = useCallback(
    isCurrentAdvertiseAccess => {
      dispatch(setCurrentAdvertiseAccess(isCurrentAdvertiseAccess));
    },
    [dispatch]
  );

  const changeRegisterInputValue = event => {
    const { value, name } = event.target;
    const doNotChangeRegisterInputValues = [
      "emailVerification",
      "verificationCode",
    ];
    const isPassword = "password";
    if (doNotChangeRegisterInputValues.includes(name)) return;
    else if (isPassword === name)
      setCorrectPasswordPattern(checkPasswordPattern(value));

    dispatch(
      changeField({
        form: "register",
        key: name,
        value,
      })
    );
  };
  const inputValueDuplicationCheck = event => {
    const currentCheckButtonType = event.target.dataset.check;
    const currentCheckInputValue = sortCheckInputValue(
      currentCheckButtonType,
      form
    );

    dispatch(initializeDuplicationInfo());
    dispatch(checkInputValue(currentCheckInputValue));
  };

  const sendToEmailForVerificationCode = event => {
    const currentVerificationEmail = event.target.previousSibling.value;
    if (currentVerificationEmail !== form.email) return;

    dispatch(verificationCodeSend(currentVerificationEmail));
  };

  const signup = () => {
    const { email, password, re_password, nickname, is_receive_email, nation } =
      form;

    dispatch(
      register({
        email,
        password,
        re_password,
        nickname,
        is_receive_email,
        nation,
      })
    );
  };

  useEffect(() => {
    dispatch(initializeForm("register"));

    message === "SUCCESS" && dispatch(initializeForm("register"));

    return () => {
      dispatch(initializeForm("register"));
    };
  }, [dispatch, message]);

  return (
    <ModalTemplate>
      <RegisterForm
        form={form}
        checkCurrentAdvertiseAccess={checkCurrentAdvertiseAccess}
        isCorrectPasswordPattern={isCorrectPasswordPattern}
        authError={authError}
        changeRegisterInputValue={changeRegisterInputValue}
        inputValueDuplicationCheck={inputValueDuplicationCheck}
        sendToEmailForVerificationCode={sendToEmailForVerificationCode}
        signup={signup}
      />
    </ModalTemplate>
  );
};

export default RegisterFormContainer;
