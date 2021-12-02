import React from "react";
import styled from "styled-components";
import TopNav from "../../components/TopNav/TopNav";
import SideNav from "../../components/SideNav/SideNav";
import CategoryBarContainer from "../../containers/CategoryBarContainer";
import MainTemplate from "./MainTemplate";
import MainFormContainer from "../../containers/MainFormContainer";

const MainPage = () => {
  return (
    <Container>
      <NavContainer>
        <TopNav />
        <SideNav />
      </NavContainer>
      <CategoryBarWrapper>
        <CategoryBarContainer />
      </CategoryBarWrapper>
      <MainContainer>
        <MainTemplate>
          <MainFormContainer />
        </MainTemplate>
      </MainContainer>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  max-width: 1420px;
  height: 2000px;
  margin: 0 auto;
  background-color: #e4e4e4;
`;

const NavContainer = styled.div`
  position: fixed;
  height: 100%;
  z-index: 10;
`;

const CategoryBarWrapper = styled.div`
  position: absolute;
  top: 100px;
  left: 92px;
  z-index: 10;
`;

const MainContainer = styled.div`
  position: absolute;
  top: 160px;
  left: 100px;
`;

export default MainPage;
