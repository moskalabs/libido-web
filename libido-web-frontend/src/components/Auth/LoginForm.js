import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { GoogleLogin } from "react-google-login";
import client from "../../lib/api/client";

function LoginForm({ changeLoginInputValue, signin }) {
  const [googleToken, setGoogleToken] = useState("");

  const { naver } = window;

  const initializeNaverLogin = () => {
    const naverLogin = new naver.LoginWithNaverId({
      clientId: "D6LeoiC8EqM1qxbMl3rP",
      callbackUrl: "http://localhost:3000/login",
      isPopup: false,
      loginButton: { color: "green", type: 1, height: "28" },
      callbackHandle: true,
    });
    naverLogin.init();
  };

  const onSuccessGoogle = response => {
    const googleToken = response.accessToken;
    setGoogleToken(googleToken);
  };

  const userProfile = () => {
    window.location.href.includes("access_token") && GetUser();
    function GetUser() {
      const location = window.location.href.split("=")[1];
      const token = location.split("&")[0];

      fetch(`http://15.164.210.185:8000/users/naver/login`, {
        method: "GET",
        headers: {
          "Content-type": "application/json",
          Authorization: token,
        },
      })
        .then(res => res.json())
        .then(res => {
          localStorage.setItem("access_token", res.access_token);
        })
        .catch(err => console.log("err : ", err));
    }
  };

  useEffect(() => {
    if (googleToken === "") return;

    async function googleLogin() {
      const result = await client.get(
        "http://15.164.210.185:8000/users/google/login",
        {
          headers: {
            "content-type": "application/json",
            Authorization: googleToken,
          },
        }
      );
    }
    googleLogin();
  }, [googleToken]);

  useEffect(() => {
    initializeNaverLogin();
    userProfile();
  });

  return (
    <Container>
      <StyledLoginForm onChange={changeLoginInputValue}>
        <div className="login">LOGIN</div>
        <div>리비도에 로그인하여</div>
        <div className="newService">새로운 서비스를 만나보세요 :)</div>

        <StyledInput name="email" placeholder="EMAIL ID" type="email" />
        <StyledInput name="password" placeholder="PASSWORD" type="password" />
        <ForgetPassword to="password">· FORGET PASSWORD?</ForgetPassword>

        <SocialButtonContainer>
          <GoogleLogin
            onSuccess={onSuccessGoogle}
            clientId="446963991551-6e9gh8ou52mac0je7f753tdrq1gc7377.apps.googleusercontent.com"
            buttonText="start with Google"
          />
          <SocialButton>
            <div id="naverIdLogin" />
            start with Naver
          </SocialButton>
        </SocialButtonContainer>
      </StyledLoginForm>
      <ButtonContainer>
        <StyledLink to="/register">
          <SignupButton>CREATE ID</SignupButton>
        </StyledLink>
        <NextButton onClick={signin}>LOGIN</NextButton>
      </ButtonContainer>
    </Container>
  );
}

const Container = styled.div``;

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

const ForgetPassword = styled(Link)`
  margin: 20px 0 10px;
  border: none;
  background-color: #fff;
  font-family: "Readex Pro", sans-serif;
  font-size: 16px;
  font-weight: 700;
  text-decoration: none;
  cursor: pointer;
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
  padding: 5px 15px;
  margin-left: 10px;
  background: white;
  color: rgba(0, 0, 0, 0.54);
  box-shadow: rgb(0 0 0 / 24%) 0px 2px 2px 0px, rgb(0 0 0 / 24%) 0px 0px 1px 0px;
  border: 1px solid transparent;
  cursor: pointer;
  font-weight: 100;
  border-radius: 2px;
  font-size: 14px;
  font-weight: 500;
  font-family: "Roboto", sans-serif;
  img {
    margin-right: 15px;
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

export default LoginForm;
