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
          <SearchContainer topNav placeholder="search here..." />
          <div className="searchIcon" />
        </SearchBarContainer>
        <RightSubMenu>
          <MessageContainer>
            <MessageLogo />
            <MessageLink to="/">Messages</MessageLink>
          </MessageContainer>
          <Button main>로그인</Button>
        </RightSubMenu>
      </TopNavHeader>
    </Container>
  );
};

const Container = styled.div`
  max-width: 1328px;
  position: absolute;
  top: 0;
  left: 92px;
  padding: 25px 0 25px;
  border: none;
  border-radius: 30px;
  background-color: #fff;
`;

const TopNavHeader = styled.header`
  display: flex;
  align-items: center;
`;

const LogoContainer = styled.div`
  // 차후 에셋에 따라 수정
  width: 200px;
  height: 50px;
  margin: 0 90px 0 18px;
`;

const SearchBarContainer = styled.div`
  position: relative;

  .searchIcon {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 10px;
    right: 20px;
    width: 30px;
    height: 30px;
    background: url(./images/search.svg) no-repeat;
    background-size: 25px 25px;
    background-position: center center;
  }
`;

const LogoImg = styled.div`
  width: 160px;
  height: 50px;
  background: url(./images/logo.png) no-repeat;
  background-position: center center;
  background-size: 650px 650px;
`;

const RightSubMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
`;

const MessageContainer = styled.div`
  display: flex;
  align-items: center;
  width: 120px;
  margin: 0 10px 0 90px;
`;

const MessageLogo = styled.div`
  width: 30px;
  height: 30px;
  margin-right: 8px;
  background: url(./images/message.svg) no-repeat;
  background-position: center center;
  background-size: 20px 20px;
`;

const MessageLink = styled(Link)`
  text-decoration: none;
  color: #707070;
  letter-spacing: 0.5px;
`;

export default TopNav;
