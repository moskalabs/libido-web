import React from "react";
import AuthForm from "../../components/Auth/AuthForm";
import AuthTemplate from "../../components/Auth/AuthTemplate";
import LoginForm from "../../containers/Auth/LoginForm";

const LoginPage = () => {
  return (
    <AuthTemplate>
      {/* <AuthForm type="login" /> */}
      <LoginForm />
    </AuthTemplate>
  );
};

export default LoginPage;
