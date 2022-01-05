import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeField,
  initializeForm,
  register,
  initializeDuplicationInfo,
  checkInputValue,
  verificationCodeSend,
  setAuthModalVisible,
  setCurrentAdvertiseAccess,
} from "../../modules/auth";
import RegisterForm from "../../components/Auth/RegisterForm";
import AuthTemplate from "../../components/Auth/AuthTemplate";
import BodyBlackout from "../../components/common/BodyBlackout";
import {
  checkPasswordPattern,
  sortCheckInputValue,
} from "../../lib/checkAuthPattern";

const RegisterFormContainer = () => {
  const dispatch = useDispatch();

  const form = useSelector(({ auth }) => auth.register);
  const message = useSelector(({ auth }) => auth.message);
  const isVisibleAuthModal = useSelector(
    ({ auth }) => auth.register.isVisibleAuthModal
  );

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
  }, [dispatch]);

  useEffect(() => {
    if (message === "SUCCESS" || isVisibleAuthModal) {
      dispatch(initializeForm("register"));
    }
  }, [message, isVisibleAuthModal]);

  if (isVisibleAuthModal) {
    return (
      <>
        <BodyBlackout
          modalSort="register"
          setAuthModalVisible={setAuthModalVisible}
          isVisibleAuthModal={isVisibleAuthModal}
        />
        <AuthTemplate>
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
        </AuthTemplate>
      </>
    );
  } else return null;
};

export default RegisterFormContainer;
