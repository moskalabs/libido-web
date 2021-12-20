import React from "react";
import styled from "styled-components";

const StyledPasswordForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  form {
    text-align: center;
    .condition {
      font-size: 0.8rem;
      color: gray;
    }
  }
`;

const ResetPw = styled.div`
  font-size: 16px;
  margin-top: 20px;
  margin-bottom: 20px;
  font-weight: bolder;
  color: #525252;
  letter-spacing: 1px;
`;
const FindPw = styled.div`
  margin-bottom: 30px;
  font-weight: bolder;
  color: #525252;
  letter-spacing: 1px;
`;
const StyledInput = styled.input`
  width: 315px;
  padding: 10px 20px;
  margin-right: 5px;
  margin-bottom: 30px;
  font-size: 0.9rem;
  outline: none;
  border: 1px rgba(38, 47, 106, 0.5) solid;
  border-radius: 4px;
`;

const EmailInput = styled.input`
  width: 210px;
  padding: 10px 20px;
  /* margin-top: 10px; */
  margin-right: 10px;
  margin-bottom: 15px;
  font-size: 0.9rem;
  outline: none;
  border: 1px rgba(38, 47, 106, 0.5) solid;
  border-radius: 4px;
`;
const PasswordInput = styled.input`
  width: 315px;
  padding: 10px 20px;
  margin-top: 10px;
  margin-right: 10px;
  margin-bottom: 15px;
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
  justify-content: flex-end;
`;
const Button = styled.button`
  margin-top: 30px;
  padding: 12px 18px;
  border-radius: 3px;
  background: #262f6a;
  border-style: none;
  cursor: pointer;
  color: white;
`;
function FindPasswordForm() {
  return (
    <StyledPasswordForm>
      <FindPw>비밀번호 찾기</FindPw>
      <form>
        <StyledInput placeholder="가입한 ID 입력" />
        <EmailInput
          name="emailVerification"
          placeholder="이메일"
          type="email"
        />
        <OverlayButton>인증번호 발송</OverlayButton>
        <EmailInput name="verificationCode" placeholder="인증번호" />
        <OverlayButton>인증번호 입력</OverlayButton>

        <ResetPw>비밀번호 재설정</ResetPw>
        <PasswordInput placeholder="새로운 비밀번호" />
        <div className="condition">
          문자, 숫자, 기호를 조합하여 8자 이상을 사용하세요
        </div>
        <PasswordInput placeholder="비밀번호 확인" />
      </form>
      <Footer>
        <Button type="submit">NEXT</Button>
      </Footer>
    </StyledPasswordForm>
  );
}

export default FindPasswordForm;
