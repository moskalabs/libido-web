import React from "react";
import styled from "styled-components";

const MainTemplate = ({ mainList, children }) => {
  return <MainTemplateStyle mainList={mainList}>{children}</MainTemplateStyle>;
};

const MainTemplateStyle = styled.div`
  padding: ${({ mainList }) => (mainList ? "65px 0 0 50px" : "20px 0 0 20px")};
  margin: ${({ mainList }) => mainList ?? "125px 0 0 100px"};
  background-color: #f3f3f3;
`;

export default MainTemplate;
