import React from "react";
import styled from "styled-components";

function FindPasswordForm() {
  return (
    <StyledPasswordForm>
      <ResetPw>비밀번호 재설정</ResetPw>
      <form>
        <StyledInput placeholder="새로운 비밀번호" />
        <div className="condition">
          문자, 숫자, 기호를 조합하여 8자 이상을 사용하세요
        </div>
        <StyledInput placeholder="비밀번호 확인" />
      </form>
      <Footer>
        <Button type="submit">NEXT</Button>
      </Footer>
    </StyledPasswordForm>
  );
}

const StyledPasswordForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .condition {
    font-size: 0.8rem;
    color: gray;
    margin-bottom: 20px;
  }
`;

const ResetPw = styled.div`
  margin-bottom: 30px;
  font-weight: bolder;
  color: #525252;
  letter-spacing: 1px;
`;

const StyledInput = styled.input`
  width: 315px;
  padding: 10px 20px;
  margin-right: 5px;
  margin-bottom: 10px;
  font-size: 0.9rem;
  outline: none;
  border: 1px rgba(38, 47, 106, 0.5) solid;
  border-radius: 4px;
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
export default FindPasswordForm;
