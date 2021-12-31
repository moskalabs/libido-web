import React, { useState } from "react";
import styled from "styled-components";
import AccessTermForm from "./AccessTermForm";

function RegisterForm({
  form,
  isCorrectPasswordPattern,
  changeRegisterInputValue,
  inputValueDuplicationCheck,
  sendToEmailForVerificationCode,
  signup,
}) {
  const [isCompareVerificationCodeSuccess, setCompareVerificationCode] =
    useState(false);

  const [isRegisterFormVisible, setRegisterFormVisible] = useState(false);

  const { password, re_password, verificationCode } = form;

  const goToRegisterForm = () => {
    setRegisterFormVisible(true);
  };

  const compareVerificationCode = event => {
    const currentUserInputVerificationCode = event.target.previousSibling.value;
    if (currentUserInputVerificationCode === verificationCode)
      setCompareVerificationCode(true);
  };

  const outputPasswordInfoCondition = () => {
    const currentPasswordLength = password.length;
    const currentRePasswordLength = re_password.length;
    const emptyInputValue = 0;

    if (currentPasswordLength === emptyInputValue)
      return "문자, 숫자, 기호를 조합하여 8자 이상을 사용하세요";
    else {
      if (currentRePasswordLength === emptyInputValue) {
        if (isCorrectPasswordPattern) return "사용할 수 있는 비밀번호입니다";
        else return "올바른 비밀번호 형식을 지켜주세요";
      } else {
        if (password === re_password) return "비밀번호가 일치합니다";
        else return "비밀번호가 일치하지 않습니다";
      }
    }
  };

  if (isRegisterFormVisible) {
    return (
      <Container onChange={changeRegisterInputValue}>
        <div className="registerGuide">CREATE LIBIDO ID</div>
        <h3>회원가입</h3>
        <Inner>
          <StyledInput name="email" placeholder="ID" />
          <OverlayButton
            onClick={inputValueDuplicationCheck}
            data-check="idCheckButton"
          >
            중복확인
          </OverlayButton>
          <div className="condition">
            문자, 숫자, 기호를 조합하여 8자 이상을 사용하세요
          </div>
          <StyledInput name="nickname" placeholder="닉네임" type="text" />
          <OverlayButton
            onClick={inputValueDuplicationCheck}
            data-check="nicknameCheckButton"
          >
            중복확인
          </OverlayButton>
          <EmailInfo>이메일 정보 입력</EmailInfo>
          <StyledInput
            name="emailVerification"
            placeholder="이메일"
            type="email"
          />
          <OverlayButton onClick={sendToEmailForVerificationCode}>
            인증번호 발송
          </OverlayButton>
          <StyledInput name="verificationCode" placeholder="인증번호" />
          <OverlayButton onClick={compareVerificationCode}>
            인증번호 입력
          </OverlayButton>

          {isCompareVerificationCodeSuccess && (
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
              <div className="condition">{outputPasswordInfoCondition()}</div>
            </>
          )}
        </Inner>
        <Footer>
          <Button onClick={signup}>회원가입</Button>
        </Footer>
      </Container>
    );
  } else return <AccessTermForm goToRegisterForm={goToRegisterForm} />;
}

const Container = styled.div`
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

const Inner = styled.div``;

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
const EmailInfo = styled.div`
  margin-bottom: 10px;
  font-size: 0.9em;
  font-weight: bolder;
  color: #525252;
  letter-spacing: 1px;
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
