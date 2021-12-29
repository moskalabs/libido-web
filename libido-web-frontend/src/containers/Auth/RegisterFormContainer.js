import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  changeField,
  initializeForm,
  register,
  initializeDuplicationInfo,
  checkInputValue,
  verificationCodeSend,
} from "../../modules/auth";
import RegisterForm from "../../components/Auth/RegisterForm";

const checkPasswordPattern = currentInputPassword => {
  const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
  if (passwordRegex.test(currentInputPassword)) return true;
  else return false;
};

const RegisterFormContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const form = useSelector(({ auth }) => auth.register);
  const message = useSelector(({ auth }) => auth.message);

  const authError = useSelector(({ auth }) => auth.authError);

  const [isCorrectPasswordPattern, setCorrectPasswordPattern] = useState(false);

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

  const sortCheckInputValue = currentCheckButtonType => {
    let checkInputValue;
    switch (currentCheckButtonType) {
      case "nicknameCheckButton":
        checkInputValue = {
          currentCheckInputAPI: "nicknamecheck",
          currentCheckKey: "nickname",
          currentCheckInputValue: form.nickname,
        };
        break;
      case "idCheckButton":
        checkInputValue = {
          currentCheckInputAPI: "emailcheck",
          currentCheckKey: "email",
          currentCheckInputValue: form.email,
        };
        break;
      default:
        break;
    }
    return checkInputValue;
  };

  const inputValueDuplicationCheck = event => {
    const currentCheckButtonType = event.target.dataset.check;
    const currentCheckInputValue = sortCheckInputValue(currentCheckButtonType);
    dispatch(initializeDuplicationInfo());
    dispatch(checkInputValue(currentCheckInputValue));
  };

  const sendToEmailForVerificationCode = event => {
    const currentVerificationEmail = event.target.previousSibling.value;
    if (currentVerificationEmail !== form.email) return;

    dispatch(verificationCodeSend(currentVerificationEmail));
  };

  const signup = event => {
    const { email, password, re_password, nickname } = form;

    dispatch(
      register({
        email,
        password,
        re_password,
        nickname,
      })
    );
  };

  useEffect(() => {
    dispatch(initializeForm("register"));
  }, [dispatch]);

  if (message === "SUCCESS") navigate("/");
  else {
    return (
      <RegisterForm
        form={form}
        isCorrectPasswordPattern={isCorrectPasswordPattern}
        authError={authError}
        changeRegisterInputValue={changeRegisterInputValue}
        inputValueDuplicationCheck={inputValueDuplicationCheck}
        sendToEmailForVerificationCode={sendToEmailForVerificationCode}
        signup={signup}
      />
    );
  }
};

export default RegisterFormContainer;
