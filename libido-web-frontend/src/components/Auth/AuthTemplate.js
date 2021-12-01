import React from "react";
import styled from "styled-components";

const StyledAuthTemplate = styled.div`
  position: absoulte;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LoginBox = styled.div`
  padding: 2rem;
  width: 360px;
  border: 1px #c4c3c2 solid;
  border-radius: 2px;
  background: #d4d3d2;
`;
const AuthTemplate = ({ children }) => {
  return (
    <StyledAuthTemplate>
      <LoginBox>
        <div>{children}</div>
      </LoginBox>
    </StyledAuthTemplate>
  );
};

export default AuthTemplate;
