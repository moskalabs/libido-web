import React from "react";
import styled from "styled-components";
import CategoryBar from "./CategoryBar";
import MainTemplate from "./MainTemplate";
import MainForm from "./MainForm";

const MainPage = () => {
  return (
    <Container>
      <CategoryBar />
      <MainTemplate>
        <MainForm />
      </MainTemplate>
    </Container>
  );
};

const Container = styled.div`
  max-width: 1330px;
  position: absolute;
  top: 100px;
  left: 92px;
`;

export default MainPage;
