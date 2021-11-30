import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import SearchBar from "../common/SearchBar";
import Button from "../common/Button";

const TopNav = () => {
  return (
    <Container>
      <TopNavHeader>
        <LogoContainer>
          <LogoImg />
          <LogoName />
        </LogoContainer>
        <SearchBarContainer>
          <SearchBar topNav placeholder="search here..." />
          <div className="searchIcon">Icon</div>
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
  max-width: 1330px;
  padding: 25px 0 25px;
  border: none;
  border-radius: 30px;
  float: right;
  background-color: red;
`;

const TopNavHeader = styled.header`
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
`;

const LogoContainer = styled.div`
  // 차후 에셋에 따라 수정
  width: 200px;
  height: 50px;
  margin: 0 90px 0 18px;
  background-color: orange;
`;

const SearchBarContainer = styled.div`
  position: relative;
  background-color: aquamarine;

  .searchIcon {
    //추후 에셋 변경
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 10px;
    right: 20px;
    width: 30px;
    height: 30px;
    background-color: blanchedalmond;
  }
`;

const LogoImg = styled.img``;

const LogoName = styled.img``;

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
  background-color: green;
`;

const MessageLogo = styled.div`
  width: 30px;
  height: 30px;
  margin-right: 8px;
  background-color: cyan;
`;

const MessageLink = styled(Link)`
  text-decoration: none;
  color: #707070;
  letter-spacing: 0.5px;
`;

export default TopNav;
