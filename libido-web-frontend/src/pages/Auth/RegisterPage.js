import React from "react";
import AuthForm from "../../components/Auth/AuthForm";
import AuthTemplate from "../../components/Auth/AuthTemplate";
import RegisterForm from "../../containers/Auth/RegisterForm";

const RegisterPage = () => {
  return (
    <AuthTemplate>
      {/* <AuthForm type="register" /> */}
      <RegisterForm />
    </AuthTemplate>
  );
};

export default RegisterPage;
