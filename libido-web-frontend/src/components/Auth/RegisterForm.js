import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import client from "../../lib/api/client";

function RegisterForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [re_password, setRepassword] = useState("");
  const [nickname, setNickname] = useState("");

  const [isPassword, setIsPassword] = useState(false);
  const [isPasswordConfirm, setIsPasswordConfirm] = useState(false);
  const [verificationCode, setVerificationCode] = useState(null);
  const [authNumber, setAuthNumber] = useState(null);
  const [isLoginSuccess, setLoginSuccess] = useState(false);

  const navigate = useNavigate();

  const onEmailHandler = e => {
    setEmail(e.target.value);
  };

  const onNicknameHandler = e => {
    setNickname(e.target.value);
  };

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

  const onChangePassword = useCallback(e => {
    const passwordRegex =
      /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
    const passwordCurrent = e.target.value;
    setPassword(passwordCurrent);
    if (!passwordRegex.test(passwordCurrent)) {
      setIsPassword(false);
    } else {
      setIsPassword(true);
    }
  }, []);

  const onChangePasswordConfirm = useCallback(
    e => {
      const passwordConfirmCurrent = e.target.value;
      setRepassword(passwordConfirmCurrent);

      if (password === passwordConfirmCurrent) {
        setIsPasswordConfirm(true);
      } else {
        setIsPasswordConfirm(false);
      }
    },
    [password]
  );

  const sortCheckInputValue = currentCheckButtonType => {
    let checkInputValue;
    switch (currentCheckButtonType) {
      case "nicknameCheckButton":
        checkInputValue = nickname;
        break;
      case "idCheckButton":
        checkInputValue = email;
        break;
      default:
        break;
    }
    return checkInputValue;
  };

  const inputValueCheck = e => {
    const currentCheckButtonType = e.target.dataset.check;
    const currentCheckInputValue = sortCheckInputValue(currentCheckButtonType);

    const regExp =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    let checkType;
    let currentKey;
    if (regExp.test(currentCheckInputValue)) {
      checkType = "emailcheck";
      currentKey = "email";
    } else {
      checkType = "nicknamecheck";
      currentKey = "nickname";
    }

    client
      .post(`http://15.164.210.185:8000/users/${checkType}`, {
        [currentKey]: currentCheckInputValue,
      })
      .then(res => {
        const message = res.data.message;
        if (message === "AVAILABLE_EMAIL" || message === "AVAILABLE_NICKNAME") {
        }
      })
      .catch(error => {
        console.log("중복되었습니다.");
      });
  };
  const sendVerificationCode = e => {
    client
      .post("http://15.164.210.185:8000/users/signupemail", {
        email,
      })
      .then(res => {
        const authNumber = res.data["auth_number"];
        setAuthNumber(authNumber);
      });
  };

  const test = e => {
    if (authNumber === verificationCode) {
      setLoginSuccess(true);
    } else {
      setLoginSuccess(false);
    }
  };

  const test2 = e => {
    setVerificationCode(e.target.value);
  };

  return (
    <StyledRegisterForm>
      <div className="registerGuide">CREATE LIBIDO ID</div>
      <h3>회원가입</h3>
      <div>
        <StyledInput name="email" onChange={onEmailHandler} placeholder="ID" />
        <OverlayButton onClick={inputValueCheck} data-check="idCheckButton">
          중복확인
        </OverlayButton>
        <StyledInput
          name="nickname"
          onChange={onNicknameHandler}
          placeholder="닉네임"
          type="text"
        />
        <OverlayButton
          onClick={inputValueCheck}
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
        <OverlayButton onClick={sendVerificationCode}>
          인증번호 발송
        </OverlayButton>
        <StyledInput
          onChange={test2}
          name="verificationCode"
          placeholder="인증번호"
        />
        <OverlayButton onClick={test}>인증번호 입력</OverlayButton>

        <PasswordContainer>
          <PasswordInput
            name="password"
            placeholder="PASSWORD"
            type="password"
            onChange={onChangePassword}
          />

          <PasswordInput
            name="re_password"
            placeholder="PW CHECK"
            type="password"
            onChange={onChangePasswordConfirm}
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
