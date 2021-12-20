import React, { useCallback, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const StyledLoginForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .login {
    font-family: "Readex Pro", sans-serif;
    font-weight: bold;
    font-size: 1.3rem;
    letter-spacing: 1px;
    margin-bottom: 20px;
  }
  div {
    margin-bottom: 5px;
  }
  .newService {
    margin-bottom: 30px;
  }
`;

const StyledInput = styled.input`
  width: 330px;
  padding: 10px 18px;
  margin-bottom: 7px;
  font-size: 0.9rem;
  outline: none;
  border: 1px rgba(38, 47, 106, 0.5) solid;
  border-radius: 4px;
`;

const ForgetPassword = styled.div`
  margin-bottom: 50px;
  font-family: "Readex Pro", sans-serif;
  font-weight: bold;
  color: #262f6a;
`;
const SocialButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;
const SocialButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 27px;
  border-radius: 3px;
  background: white;
  border: 1px lightgray solid;
  cursor: pointer;
  font-family: "Readex Pro", sans-serif;
  font-weight: 100;
  img {
    margin-right: 10px;
  }
  #naverIcon,
  #googleIcon {
    width: 32px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 40px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const SignupButton = styled.button`
  display: inline;
  padding: 10px 18px;
  border-radius: 4px;
  background: white;
  border: 1px lightgray solid;
  cursor: pointer;
`;

const NextButton = styled.button`
  display: inline;
  padding: 12px 18px;
  border-radius: 3px;
  background: #262f6a;
  border-style: none;
  cursor: pointer;
  color: white;
`;

function LoginForm() {
  const { naver } = window;
  const initializeNaverLogin = () => {
    const naverLogin = new naver.LoginWithNaverId({
      clientId: "D6LeoiC8EqM1qxbMl3rP",
      callbackUrl: "http://localhost:3000/login",
      isPopup: false,
      loginButton: { color: "green", type: 1, height: "40" },
      callbackHandle: true,
    });
    naverLogin.init();
  };

  // const getNaverToken = () => {
  //   console.log("d");
  //   if (!location.hash) return;
  //   const token = location.hash.split("=")[1].split("&")[0];
  //   console.log(token);
  //   console.log("토큰토큰");
  // };

  useEffect(() => {
    initializeNaverLogin();
    // getNaverToken();
    userProfile();
  });

  const userProfile = () => {
    window.location.href.includes("access_token") && GetUser();
    function GetUser() {
      const location = window.location.href.split("=")[1];
      const token = location.split("&")[0];

      fetch(`http://172.30.1.7:8000/users/naver/login`, {
        method: "GET",
        headers: {
          "Content-type": "application/json",
          Authorization: token,
        },
      })
        .then(res => res.json())
        .then(res => {
          localStorage.setItem("access_token", res.access_token);
          localStorage.setItem("userInfo", JSON.stringify(res.results));
        })
        .catch(err => console.log("err : ", err));
    }
  };

  return (
    <>
      <StyledLoginForm>
        <div className="login">LOGIN</div>
        <div>리비도에 로그인하여</div>
        <div className="newService">새로운 서비스를 만나보세요 :)</div>

        <StyledInput name="email" placeholder="EMAIL ID" type="email" />
        <StyledInput name="password" placeholder="PASSWORD" type="password" />
        <ForgetPassword>· FORGET PASSWORD?</ForgetPassword>
        <SocialButtonContainer>
          <SocialButton>
            <img
              id="googleIcon"
              alt="google"
              src="https://img.icons8.com/color/48/000000/google-logo.png"
            />
            start with
            <br /> Google
          </SocialButton>
          <SocialButton>
            {/* <img
                id="naverIcon"
                alt="naver"
                src="http://vonpat01.cafe24.com/wp-content/uploads/2020/08/naver.png"
                // id="naverIdLogin"
              /> */}
            <div id="naverIdLogin">
              start with
              <br />
              NAVER
            </div>
          </SocialButton>
        </SocialButtonContainer>
      </StyledLoginForm>
      <ButtonContainer>
        <StyledLink to="/register">
          <SignupButton>CREATE ID</SignupButton>
        </StyledLink>
        <NextButton>NEXT</NextButton>
      </ButtonContainer>
    </>
  );
}

export default LoginForm;
