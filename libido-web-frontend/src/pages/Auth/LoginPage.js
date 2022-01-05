import React from "react";
import AuthTemplate from "../../components/Auth/AuthTemplate";
import LoginFormContainer from "../../containers/Auth/LoginFormContainer";

const LoginPage = () => {
  return (
    <AuthTemplate>
      <LoginFormContainer />
    </AuthTemplate>
  );
};

export default LoginPage;
