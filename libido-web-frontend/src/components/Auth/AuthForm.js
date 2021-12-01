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
  }
`;

const LoginContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 170px;
  height: 40px;
  background: tomato;
`;

const AuthForm = () => {
  //   const { naver } = window;

  //   const Login = () => {
  //     Naver();
  //     UserProfile();
  //   };

  //   useEffect(Login, []);

  //   const Naver = () => {
  //     const naverLogin = new naver.LoginWithNaverId({
  //       clientId: "D6LeoiC8EqM1qxbMl3rP",
  //       callbackUrl: "http://localhost:3000",
  //       isPopup: false,
  //       callbackHandle: true,
  //     });
  //     naverLogin.init();
  //   };

  //   const UserProfile = () => {
  //     window.location.href.includes("access_token") && GetUser();
  //     function GetUser() {
  //       const location = window.location.href.split("=")[1];
  //       const token = location.split("&")[0];
  //       console.log("token: ", token);
  //       fetch(`${API}/account/sign-in`, {
  //         method: "GET",
  //         headers: {
  //           "Content-type": "application/json",
  //           Authorization: token,
  //         },
  //       })
  //         .then(res => res.json())
  //         .then(res => {
  //           localStorage.setItem("access_token", res.token);
  //           setUserData({
  //             nickname: res.nickname,
  //             image: res.image,
  //           });
  //         })
  //         .catch(err => console.log("err : ", err));
  //     }
  //   };
  return (
    <StyledAuthForm>
      <h3>로그인</h3>
      <form>
        <input autoComplete="on" placeholder="이메일" />
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
      </form>
    </StyledAuthForm>
  );
};

export default AuthForm;
