import React from "react";
import AuthTemplate from "../../components/Auth/AuthTemplate";
import RegisterFormContainer from "../../containers/Auth/RegisterFormContainer";

const RegisterPage = () => {
  return (
    <AuthTemplate>
      <RegisterFormContainer />
    </AuthTemplate>
  );
};

export default RegisterPage;
