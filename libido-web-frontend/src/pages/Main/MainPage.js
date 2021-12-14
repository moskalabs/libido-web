import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SideNav from "../../components/SideNav/SideNav";
import CategoryBarContainer from "../../containers/CategoryBarContainer";
import MainTemplate from "./MainTemplate";
import MainFormContainer from "../../containers/MainFormContainer";

const MainPage = () => {
  const [isScrollEnd, setIsScrollEnd] = useState(false);

  const checkFetchAddData = event => {
    const { scrollTop, scrollHeight, clientHeight } =
      event.target.scrollingElement;

    const targetScrollPos = scrollHeight - parseInt(scrollTop);

    if (targetScrollPos === clientHeight) setIsScrollEnd(!isScrollEnd);
  };

  const resetIsScrollEnd = () => {
    setIsScrollEnd(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", checkFetchAddData, true);

    return () => {
      window.removeEventListener("scroll", null);
    };
  });
  return (
    <Container>
      <SideNavContainer>
        <SideNav />
      </SideNavContainer>
      <Inner>
        <CategoryBarWrapper>
          <CategoryBarContainer />
        </CategoryBarWrapper>
        <MainTemplate>
          <MainFormContainer
            isScrollEnd={isScrollEnd}
            resetIsScrollEnd={resetIsScrollEnd}
          />
        </MainTemplate>
      </Inner>
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
  background-color: #f3f3f3;
`;

const CategoryBarWrapper = styled.div`
  min-width: 1820px;
  margin: 0 auto;
  z-index: 20;
`;

export default MainPage;
