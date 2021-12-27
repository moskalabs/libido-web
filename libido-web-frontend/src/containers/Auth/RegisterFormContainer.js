import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeField,
  initializeForm,
  register,
  initializeDuplicationInfo,
  checkInputValue,
} from "../../modules/auth";
import RegisterForm from "../../components/Auth/RegisterForm";
import { check } from "../../modules/user";

const RegisterFormContainer = () => {
  const dispatch = useDispatch();
  const { form, message, checkResult } = useSelector(({ auth }) => ({
    form: auth.register,
    message: auth.message,
    checkResult: auth.isCheckSuccess,
  }));
  const authError = useSelector(({ auth }) => auth.authError);

  // const isAvailable = checkResult && checkResult.split("_")[0];

  const changeRegisterInputValue = event => {
    const { value, name } = event.target;
    const doNotChangeRegisterInputValues = [
      "emailVerification",
      "verificationCode",
    ];
    if (doNotChangeRegisterInputValues.includes(name)) return;

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
    console.log(form.email);
  };

  const sendRegisterInfo = e => {
    e.preventDefault();
    const { email, password, re_password, nickname } = form;
    if (password !== re_password) return;
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

  useEffect(() => {
    if (message === "SUCCESS") {
      // dispatch(check());
    } else {
      // dispatch(check);
    }
  }, [message, dispatch]);

  return (
    <RegisterForm
      form={form}
      authError={authError}
      changeRegisterInputValue={changeRegisterInputValue}
      inputValueDuplicationCheck={inputValueDuplicationCheck}
      sendToEmailForVerificationCode={sendToEmailForVerificationCode}
      sendRegisterInfo={sendRegisterInfo}
    />
  );
};

export default RegisterFormContainer;
