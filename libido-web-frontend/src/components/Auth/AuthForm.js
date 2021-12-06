import React, { useEffect, setUserData } from "react";
import styled from "styled-components";

const StyledAuthForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h3 {
    text-align: center;
    margin-bottom: 1rem;
  }
  .forgetPassword {
    font-size: 0.8rem;
    margin-top: 10px;
    margin-bottom: 10px;
    text-align: center;
  }
`;

const LoginContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 140px;
  height: 40px;
  margin: 0 auto;
`;

const StyledInput = styled.input`
  font-size: 1rem;
  outline: none;
  width: 100%;
`;

const Footer = styled.div`
  display: flex;

  input {
    margin-top: 20px;
    margin-right: 10px;
    padding: 5px 40px;
    border-radius: 10px;
    background: #5fc8e8;
    border-style: none;
    cursor: pointer;
    color: white;
  }
`;

const textMap = {
  login: "로그인",
  register: "회원가입",
};

const AuthForm = ({ type, form, onChange, onSubmit, submitPhoneNumber }) => {
  const text = textMap[type];

  return (
    <StyledAuthForm>
      <h3>{text}</h3>
      <form onSubmit={onSubmit}>
        <StyledInput
          autoComplete="email"
          name="email"
          placeholder="이메일"
          onChange={onChange}
          value={form.email}
        />
        <StyledInput
          autoComplete="new-password"
          name="password"
          placeholder="패스워드"
          type="password"
          onChange={onChange}
          value={form.password}
        />
        {type === "register" && (
          <>
            <StyledInput
              autoComplete="new-password"
              name="re_password"
              placeholder="패스워드 확인"
              type="password"
              onChange={onChange}
              value={form.re_password}
            />
            <StyledInput
              autoComplete="tel"
              name="phone_number"
              placeholder="휴대폰"
              type="tel"
              onChange={onChange}
              value={form.phone_number}
            />
            <StyledInput
              name="verificationCode"
              placeholder="인증번호"
              onChange={onChange}
              value={form.verificationCode}
            />
          </>
        )}
        {type === "login" ? (
          <>
            <div className="forgetPassword">비밀번호 잊어버리셨나용?</div>

            <LoginContainer>
              <img
                alt="google"
                src="https://img.icons8.com/color/48/000000/google-logo.png"
              />

              <img
                id="naverIdLogin_loginButton"
                alt="naver"
                src="http://vonpat01.cafe24.com/wp-content/uploads/2020/08/naver.png"
              />
            </LoginContainer>
          </>
        ) : (
          <div />
        )}
      </form>
      <Footer>
        {type === "login" ? (
          <>
            <input type="button" value="계정만들기" />
            <input type="button" value="로그인" />
          </>
        ) : (
          <>
            <input type="button" value="확인하기" onClick={submitPhoneNumber} />
            <input type="button" value="다음" />
          </>
        )}
      </Footer>
    </StyledAuthForm>
  );
};

export default AuthForm;
