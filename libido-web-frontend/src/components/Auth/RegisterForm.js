import React, { useState } from "react";
import styled from "styled-components";
import AccessTermForm from "./AccessTermForm";
import { CountryDropdown } from "react-country-region-selector";

function RegisterForm({
  form,
  checkCurrentAdvertiseAccess,
  isCorrectPasswordPattern,
  changeRegisterInputValue,
  inputValueDuplicationCheck,
  sendToEmailForVerificationCode,
  signup,
}) {
  const [isCompareVerificationCodeSuccess, setCompareVerificationCode] =
    useState(false);

  const [isRegisterFormVisible, setRegisterFormVisible] = useState(false);

  const { password, re_password, verificationCode, nation } = form;

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
        <Info>나라 선택</Info>
        <FormContainer>
          <StyledCountryDropdown
            name="nation"
            defaultOptionLabel={nation.length === 0 ? "나라 선택" : nation}
          >
            <span className="iconArrow">
              <img alt="arrowIcon" src="./images/icon_arrow_down.png" />
            </span>
          </StyledCountryDropdown>
        </FormContainer>
        <Info>회원정보 입력</Info>
        <FormContainer>
          <StyledInput name="email" placeholder="ID" />
          <OverlayButton
            onClick={inputValueDuplicationCheck}
            data-check="idCheckButton"
          >
            중복확인
          </OverlayButton>
        </FormContainer>
        <div className="condition">
          문자, 숫자, 기호를 조합하여 8자 이상을 사용하세요
        </div>
        <FormContainer>
          <StyledInput name="nickname" placeholder="닉네임" type="text" />
          <OverlayButton
            onClick={inputValueDuplicationCheck}
            data-check="nicknameCheckButton"
          >
            중복확인
          </OverlayButton>
        </FormContainer>
        <Info>이메일 정보 입력</Info>
        <FormContainer>
          <StyledInput
            name="emailVerification"
            placeholder="이메일"
            type="email"
          />
          <OverlayButton onClick={sendToEmailForVerificationCode}>
            인증번호 발송
          </OverlayButton>
        </FormContainer>
        <FormContainer>
          <StyledInput name="verificationCode" placeholder="인증번호" />
          <OverlayButton onClick={compareVerificationCode}>
            인증번호 입력
          </OverlayButton>
        </FormContainer>
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
            <Footer>
              <Button onClick={signup}>회원가입</Button>
            </Footer>
          </>
        )}
      </Container>
    );
  } else
    return (
      <AccessTermForm
        checkCurrentAdvertiseAccess={checkCurrentAdvertiseAccess}
        goToRegisterForm={goToRegisterForm}
      />
    );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  .registerGuide {
    font-family: "Readex Pro", sans-serif;
    text-align: center;
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
    margin-bottom: 15px;
  }
`;

const FormContainer = styled.div`
  margin-bottom: 10px;
`;

const StyledCountryDropdown = styled(CountryDropdown)`
  width: 250px;
  padding: 10px 15px;
  margin-right: 5px;
  font-size: 0.9rem;
  color: #595959;
  outline: none;
  border: 1px solid rgba(38, 47, 106, 0.5);
  border-radius: 4px;
  cursor: pointer;
  appearance: none;
  background: url(./images/icon_arrow_down.png) no-repeat;
  background-position: calc(100% - 5px);
  background-size: 25px 20px;

  option {
    background: red;
  }
`;

const StyledInput = styled.input`
  width: 250px;
  padding: 10px 20px;
  margin-right: 5px;
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
const Info = styled.div`
  margin: 10px 0;
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
  cursor: pointer;
`;

const Footer = styled.div`
  display: flex;
  margin: 0 auto;
`;
const Button = styled.button`
  padding: 12px 18px;
  margin-top: 20px;
  border-radius: 3px;
  background: #262f6a;
  border-style: none;
  cursor: pointer;
  color: white;
`;

export default RegisterForm;
