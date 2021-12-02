import React from "react";
import styled from "styled-components";

const MainTemplate = ({ children }) => {
  return <Container>{children}</Container>;
};

const Container = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 20px 0 0 40px;
`;

export default MainTemplate;
