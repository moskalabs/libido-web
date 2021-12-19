import React from "react";
import styled from "styled-components";

const DetailTemplate = ({ children }) => {
  return <Container>{children}</Container>;
};

const Container = styled.div`
  padding: 65px 0 0 50px;
  background-color: #f3f3f3;
`;

export default DetailTemplate;
