import React from "react";
import styled from "styled-components";
import { useNavigate, useLocation, matchPath, Link } from "react-router-dom";
import SearchContainer from "../../containers/SearchContainer";
import Button from "../common/Button";

const TopNav = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const accessToken = localStorage.getItem("access_token");

  const goToMain = e => {
    navigate("/");
  };

  const goToAuthPage = e => {
    const authSort = e.target.dataset.authsort;
    navigate(`/?auth=${authSort}`);
  };

  const isAuthView = () => {
    const currentPathname = location.pathname;
    if (
      matchPath("/login", currentPathname) ||
      matchPath("/register", currentPathname) ||
      matchPath("/password", currentPathname)
    )
      return true;
    else return false;
  };

  if (isAuthView()) return null;
  else
    return (
      <Container>
        <TopNavHeader>
          <LogoContainer onClick={goToMain}>
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
            <div className="rightSubMenuLine" />
            {accessToken ? (
              <UserInfoContainer>
                <UserFigure />
                <UserSettingContainer>
                  <UserName>
                    Hello, <span className="userName">Choi</span>
                  </UserName>
                  <MessageContainer>
                    <MessageLink to="/">Messages</MessageLink>
                    <MessageLogo />
                  </MessageContainer>
                  <UserAccountContainer>
                    <span>Your account</span>
                    <div className="dropdownButton" />
                  </UserAccountContainer>
                </UserSettingContainer>
              </UserInfoContainer>
            ) : (
              <TopNavButtonContainer>
                <ButtonMarginTop
                  data-authsort="login"
                  onClick={goToAuthPage}
                  main
                >
                  로그인
                </ButtonMarginTop>
                <Button onClick={goToAuthPage} data-authsort="register" main>
                  회원가입
                </Button>
              </TopNavButtonContainer>
            )}
          </RightSubMenu>
        </TopNavHeader>
      </Container>
    );
};

const Container = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  left: 116px;
  display: flex;
  padding: 0 10px;
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
  cursor: pointer;
`;

const LogoImg = styled.div`
  width: 200px;
  height: 120px;
  background: url(./images/LIBIDO_LOGO.png) no-repeat;
  background-position: center center;
  background-size: 200px 120px;
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
    top: -26px;
    right: 350px;
    border-left: 1px solid #d9d9d9;
    height: 125px;
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

const UserInfoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 120px;
`;

const UserFigure = styled.div`
  border: none;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  margin-right: 25px;
  /* background-color: red; */
  background: url(./images/profile_test.jpeg) no-repeat;
  background-size: 60px 60px;
  background-position: center center;
`;

const UserSettingContainer = styled.div`
  margin-left: 20px;
`;

const UserName = styled.div`
  font-size: 18px;

  .userName {
    font-size: 20px;
    font-weight: 700;
    color: #262f6a;
  }
`;

const MessageContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;
`;

const MessageLink = styled(Link)`
  text-decoration: none;
  color: #262f6a;
  letter-spacing: 0.5px;
`;

const MessageLogo = styled.div`
  width: 30px;
  height: 30px;
  margin-right: 8px;
  background: url(./images/message.svg) no-repeat;
  background-position: center center;
  background-size: 20px 20px;
`;

const UserAccountContainer = styled.div`
  font-size: 17px;
`;

export default TopNav;
