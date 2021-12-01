import React from "react";
import styled from "styled-components";

const MainTemplate = ({ children }) => {
  return <Container>{children}</Container>;
};

const Container = styled.div`
  max-width: 1330px;
`;

export default MainTemplate;
