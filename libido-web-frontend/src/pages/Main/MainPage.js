import React from "react";
import styled from "styled-components";
import SideNav from "../../components/SideNav/SideNav";
import CategoryBarContainer from "../../containers/CategoryBarContainer";
import MainTemplate from "./MainTemplate";
import MainFormContainer from "../../containers/MainFormContainer";
import LoginFormContainer from "../../containers/Auth/LoginFormContainer";
import RegisterFormContainer from "../../containers/Auth/RegisterFormContainer";

const MainPage = () => {
  return (
    <>
      <LoginFormContainer />
      <RegisterFormContainer />
      <Container>
        <SideNavContainer>
          <SideNav />
        </SideNavContainer>
        <Inner>
          <CategoryBarWrapper>
            <CategoryBarContainer />
          </CategoryBarWrapper>
          <MainTemplate>
            <MainFormContainer />
          </MainTemplate>
        </Inner>
      </Container>
    </>
  );
};

const Container = styled.div`
  max-width: 1919px;
  margin: 0 auto;
`;

const SideNavContainer = styled.div`
  position: fixed;
  top: 0;
  height: 100%;
  z-index: 30;
`;

const Inner = styled.div`
  margin: 185px 0 0 100px;
`;

const CategoryBarWrapper = styled.div`
  min-width: 1820px;
  margin: 0 auto;
  z-index: 20;
`;

export default MainPage;
