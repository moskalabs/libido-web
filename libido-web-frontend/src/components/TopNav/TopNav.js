import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import SearchContainer from "../../containers/SearchContainer";
import Button from "../common/Button";

const TopNav = () => {
  return (
    <Container>
      <TopNavHeader>
        <LogoContainer>
          <LogoImg />
        </LogoContainer>
        <SearchBarContainer>
          <SearchContainer
            topNav
            placeholder="검색어를 입력해주세요. (ex. 컨텐츠 제목, 스트리머 등)"
          />
          <div className="searchIcon" />
          <div className="searchLine" />
        </SearchBarContainer>
        <RightSubMenu>
          {/* 로그인 했을 때 옆에 작게 사이드로 추가_지금은 비로그인 */}
          {/* <MessageContainer>
            <MessageLogo />
            <MessageLink to="/">Messages</MessageLink>
          </MessageContainer> */}
          <div className="rightSubMenuLine" />
          <TopNavButtonContainer>
            <ButtonMarginTop main>로그인</ButtonMarginTop>
            <Button main>회원가입</Button>
          </TopNavButtonContainer>
        </RightSubMenu>
      </TopNavHeader>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  position: fixed;
  display: flex;
  top: 0;
  left: 116px;
  padding: 20px 10px;
  background-color: #fff;
  z-index: 10;
`;

const TopNavHeader = styled.header`
  min-width: 1820px;
  margin: 0 auto;
  display: flex;
  align-items: center;
`;

const LogoContainer = styled.div`
  margin: 0 170px 0 20px;
`;

const LogoImg = styled.div`
  width: 200px;
  height: 50px;
  background: url(./images/logo.png) no-repeat;
  background-position: center center;
  background-size: 850px 850px;
`;

const SearchBarContainer = styled.div`
  position: relative;

  .searchIcon {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 13px;
    right: 140px;
    width: 30px;
    height: 30px;
    background: url(./images/icon_search.png) no-repeat;
    background-size: 35px 35px;
    background-position: center center;
  }
  .searchLine {
    position: absolute;
    top: 0;
    right: 190px;
    border-left: 1px solid #262f6a;
    height: 58px;
  }
`;
const RightSubMenu = styled.div`
  position: relative;
  margin-left: 85px;

  .rightSubMenuLine {
    position: absolute;
    top: -20px;
    right: 350px;
    border-left: 1px solid #d9d9d9;
    height: 120px;
  }
`;

const TopNavButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 80px;
`;

const ButtonMarginTop = styled(Button)`
  margin-bottom: 3px;
`;
// const MessageContainer = styled.div`
//   display: flex;
//   align-items: center;
//   width: 120px;
//   margin: 0 10px 0 90px;
// `;

// const MessageLogo = styled.div`
//   width: 30px;
//   height: 30px;
//   margin-right: 8px;
//   background: url(./images/message.svg) no-repeat;
//   background-position: center center;
//   background-size: 20px 20px;
// `;

// const MessageLink = styled(Link)`
//   text-decoration: none;
//   color: #707070;
//   letter-spacing: 0.5px;
// `;

export default TopNav;
