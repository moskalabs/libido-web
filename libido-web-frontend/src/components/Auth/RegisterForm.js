import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import client from "../../lib/api/client";

function RegisterForm({
  form,
  changeRegisterInputValue,
  inputValueDuplicationCheck,
  sendToEmailForVerificationCode,
  sendRegisterInfo,
}) {
  const [isPassword, setIsPassword] = useState(false);
  const [isPasswordConfirm, setIsPasswordConfirm] = useState(false);
  const [verificationCode, setVerificationCode] = useState(null);
  const [authNumber, setAuthNumber] = useState(null);
  const [isLoginSuccess, setLoginSuccess] = useState(false);

  const { email, password, re_password, nickname } = form;

  const navigate = useNavigate();

  const signupTest = e => {
    const nation = "korea";
    client
      .post("http://15.164.210.185:8000/users/signup", {
        email,
        nickname,
        password,
        re_password,
        nation,
      })
      .then(res => {
        const message = res.data.message;
        if (message === "SUCCESS") {
          navigate("/");
        }
      });
  };

  // const onChangePassword = useCallback(e => {
  //   const passwordRegex =
  //     /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
  //   const passwordCurrent = e.target.value;
  //   console.log(passwordRegex.test(e.target.value));
  //   setPassword(passwordCurrent);
  //   if (!passwordRegex.test(passwordCurrent)) {
  //     setIsPassword(false);
  //   } else {
  //     setIsPassword(true);
  //   }
  // }, []);

  // const onChangePasswordConfirm = useCallback(
  //   e => {
  //     const passwordConfirmCurrent = e.target.value;
  //     setRepassword(passwordConfirmCurrent);

  //     if (password === passwordConfirmCurrent) {
  //       setIsPasswordConfirm(true);
  //     } else {
  //       setIsPasswordConfirm(false);
  //     }
  //   },
  //   [password]
  // );

  const sendVerificationCode = e => {
    client
      .post("http://15.164.210.185:8000/users/signupemail", {
        email,
      })
      .then(res => {
        const authNumber = res.data.auth_number;
        console.log(authNumber);
        setAuthNumber(authNumber);
      });
  };

  const test = e => {
    if (authNumber === verificationCode) {
      console.log("성공");
      setLoginSuccess(true);
    } else {
      setLoginSuccess(false);
    }
  };

  return (
    <StyledRegisterForm onChange={changeRegisterInputValue}>
      <div className="registerGuide">CREATE LIBIDO ID</div>
      <h3>회원가입</h3>
      <div>
        <StyledInput name="email" placeholder="ID" />
        <OverlayButton
          onClick={inputValueDuplicationCheck}
          data-check="idCheckButton"
        >
          중복확인
        </OverlayButton>
        <StyledInput name="nickname" placeholder="닉네임" type="text" />
        <OverlayButton
          onClick={inputValueDuplicationCheck}
          data-check="nicknameCheckButton"
        >
          중복확인
        </OverlayButton>
        <div className="condition">
          문자, 숫자, 기호를 조합하여 8자 이상을 사용하세요
        </div>
        <PhoneInfo>이메일 정보 입력</PhoneInfo>
        <StyledInput
          name="emailVerification"
          placeholder="이메일"
          type="email"
        />
        <OverlayButton onClick={sendToEmailForVerificationCode}>
          인증번호 발송
        </OverlayButton>
        <StyledInput name="verificationCode" placeholder="인증번호" />
        <OverlayButton onClick={test}>인증번호 입력</OverlayButton>

        {isLoginSuccess && (
          <>
            <PasswordContainer>
              <PasswordInput
                name="password"
                placeholder="PASSWORD"
                type="password"
              />

              <PasswordInput
                name="re_password"
                placeholder="PW CHECK"
                type="password"
              />
            </PasswordContainer>
            <div className="condition">
              {isPasswordConfirm
                ? "비밀번호가 일치합니다!"
                : `${
                    re_password.length === 0
                      ? "문자, 숫자, 기호를 조합하여 8자 이상을 사용하세요"
                      : "비밀번호가 일치하지 않습니다"
                  }`}
            </div>
          </>
        )}
      </div>
      <Footer>
        <Button onClick={signupTest}>NEXT</Button>
      </Footer>
    </StyledRegisterForm>
  );
}

const StyledRegisterForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .registerGuide {
    font-family: "Readex Pro", sans-serif;
    font-size: 1.3rem;
    font-weight: bold;
    letter-spacing: 1px;
    margin-bottom: 15px;
  }
  h3 {
    text-align: center;
    margin-bottom: 1rem;
    letter-spacing: 2px;
  }
  .condition {
    font-size: 0.8rem;
    color: gray;
    margin-bottom: 20px;
  }
`;

const PasswordContainer = styled.div`
  display: flex;
`;
const PasswordInput = styled.input`
  padding: 10px;
  margin-top: 20px;
  margin-right: 5px;
  margin-bottom: 15px;
  font-size: 0.9rem;
  outline: none;
  border: 1px rgba(38, 47, 106, 0.5) solid;
  border-radius: 4px;
`;
const PhoneInfo = styled.div`
  margin-bottom: 10px;
  font-size: 0.9em;
  font-weight: bolder;
  color: #525252;
  letter-spacing: 1px;
`;
const StyledInput = styled.input`
  width: 250px;
  padding: 10px 20px;
  margin-right: 5px;
  margin-bottom: 10px;
  font-size: 0.9rem;
  outline: none;
  border: 1px rgba(38, 47, 106, 0.5) solid;
  border-radius: 4px;
`;
const OverlayButton = styled.button`
  padding: 10px 10px;
  background: white;
  border: #e8eaed solid 1px;
  border-radius: 4px;
  box-shadow: 1px 1px 1px #e8eaed;
`;

const Footer = styled.div`
  display: flex;
`;
const Button = styled.button`
  padding: 12px 18px;
  margin-top: 40px;
  border-radius: 3px;
  background: #262f6a;
  border-style: none;
  cursor: pointer;
  color: white;
`;

export default RegisterForm;
