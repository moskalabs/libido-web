import React, { useEffect, setUserData } from "react";
import styled from "styled-components";

const StyledAuthForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .guide {
    font-family: "Readex Pro", sans-serif;
    font-size: 1.3rem;
    letter-spacing: 1px;
    margin-bottom: 10px;
  }
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
  .condition {
    font-size: 0.8rem;
    color: gray;
    margin-bottom: 20px;
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
  padding: 10px 20px;
  margin-right: 5px;
  margin-bottom: 10px;
  font-size: 0.9rem;
  outline: none;
  border: 1px lightgray solid;
  border-radius: 4px;
`;

const OverlayButton = styled.button`
  padding: 10px 10px;
  background: white;
  border: #e8eaed solid 1px;
  border-radius: 4px;
  box-shadow: 1px 1px 1px #e8eaed;
`;

const TelForm = styled.div`
  margin-top: 30px;
  text-align: center;
`;

const Footer = styled.div`
  display: flex;
`;
const Button = styled.button`
  padding: 12px 18px;
  border-radius: 3px;
  background: #262f6a;
  border-style: none;
  cursor: pointer;
  color: white;
`;
const textMap = {
  login: "로그인",
  register: "회원가입",
};

const AuthForm = ({
  type,
  form,
  inputValueCheck,
  onChange,
  onSubmit,
  submitPhoneNumber,
  isAvailable,
}) => {
  const text = textMap[type];

  return (
    <StyledAuthForm>
      <div className="guide">CREATE LIBIDO ID</div>
      <h3>{text}</h3>
      <form>
        {/* <StyledInput
          name="userName"
          placeholder="이름"
          onChange={onChange}
          value={form.userName}
        />
        <StyledInput
          name="birth"
          placeholder="생년월일(6자리)"
          onChange={onChange}
          value={form.birth}
        /> */}

        <StyledInput
          name="nickname"
          placeholder="닉네임"
          type="text"
          onChange={onChange}
          value={form.nickname}
        />
        <OverlayButton
          onClick={inputValueCheck}
          data-check="nicknameCheckButton"
        >
          중복확인
        </OverlayButton>
        <StyledInput
          name="email"
          placeholder="ID"
          onChange={onChange}
          value={form.email}
        />
        <OverlayButton onClick={inputValueCheck} data-check="idCheckButton">
          중복확인
        </OverlayButton>
        <div className="condition">
          {isAvailable === "AVAILABLE"
            ? "사용 가능 합니다!"
            : "중복되었습니다!"}
        </div>
        <StyledInput
          name="password"
          placeholder="PASSWORD"
          type="password"
          onChange={onChange}
          value={form.password}
        />
        {type === "register" && (
          <>
            <StyledInput
              name="re_password"
              placeholder="PW CHECK"
              type="password"
              onChange={onChange}
              value={form.re_password}
            />
            <div className="condition">
              문자, 숫자, 기호를 조합하여 8자 이상을 사용하세요
            </div>
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
      {type === "register" && (
        <TelForm>
          {/* <StyledInput
            id="phoneNumberInput"
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
          /> */}
          {/* <Button onClick={submitPhoneNumber}>인증번호</Button>
          <Button onClick={submitPhoneNumber}>확인하기</Button> */}
        </TelForm>
      )}
      <Footer>
        {type === "login" ? (
          <>
            <Button>계정만들기</Button>
            <Button>로그인</Button>
          </>
        ) : (
          <Button type="submit">NEXT</Button>
        )}
      </Footer>
    </StyledAuthForm>
  );
};

export default AuthForm;
