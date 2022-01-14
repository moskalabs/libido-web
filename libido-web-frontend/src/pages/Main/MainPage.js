import React from "react";
import styled from "styled-components";
import { useLocation, matchPath } from "react-router-dom";
import SideNav from "../../components/SideNav/SideNav";
import CategoryBarContainer from "../../containers/CategoryBarContainer";
import MainTemplate from "./MainTemplate";
import MainFormContainer from "../../containers/MainFormContainer";

const MainPage = () => {
  const location = useLocation();

  const isCheckMainListView = () => {
    const currentPathName = location.pathname;

    if (matchPath("/", currentPathName)) return true;
    else return false;
  };

  return (
    <Container>
      <SideNavContainer>
        <SideNav />
      </SideNavContainer>
      {isCheckMainListView() ? (
        <Inner>
          <CategoryBarWrapper>
            <CategoryBarContainer />
          </CategoryBarWrapper>
          <MainTemplate mainList>
            <MainFormContainer />
          </MainTemplate>
        </Inner>
      ) : (
        <MainTemplate />
      )}
    </Container>
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
