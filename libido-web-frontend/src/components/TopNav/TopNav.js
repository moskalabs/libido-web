import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import LoginFormContainer from "../../containers/Auth/LoginFormContainer";
import RegisterFormContainer from "../../containers/Auth/RegisterFormContainer";
import Modal from "../../components/common/Modal";
import useModal from "../../hooks/useModal";
import SearchContainer from "../../containers/SearchContainer";
import Button from "../common/Button";

const TopNav = () => {
  const navigate = useNavigate();

  const { isShowing, modalInfo, setModalVisible } = useModal();
  const [modalSort] = modalInfo;

  const accessToken = "";

  const goToMain = () => {
    navigate("/");
  };

  const verifiyShowModal = event => {
    const currentTargetElement = event.target.nodeName;

    if (currentTargetElement !== "BUTTON") return;

    const authSort = event.target.dataset.authsort;

    setModalVisible(authSort);
  };

  return (
    <Container>
      <Modal isShowing={isShowing} hide={setModalVisible}>
        {modalSort === "login" ? (
          <LoginFormContainer />
        ) : (
          <RegisterFormContainer />
        )}
      </Modal>
      <TopNavHeader>
        <LogoContainer onClick={goToMain}>
          <LogoImg />
        </LogoContainer>
        <SearchBarContainer>
          <div className="searchInfo">컨텐츠 검색</div>
          <SearchContainer
            topNav
            placeholder="나의 플레이리스트에 담을 컨텐츠를 검색하세요 !"
          />
          <div className="searchIcon" />
          <div className="searchLine" />
        </SearchBarContainer>
        <RightSubMenu>
          <div className="rightSubMenuLine" />
          {accessToken ? (
            <UserInfoContainer>
              <UserProfileContainer>
                <UserFigure />
                <UserName>
                  <span className="userName">Choi95</span> 님
                  <br />
                  안녕하세요 :)
                </UserName>
              </UserProfileContainer>
              <UserCountContainer>
                <div className="userCountLine" />
                <p>
                  VIEWED
                  <br />
                  <span className="info">522</span>시간
                </p>
                <p>
                  FRIENDS
                  <br />
                  <span className="info">95</span>명
                </p>
              </UserCountContainer>
            </UserInfoContainer>
          ) : (
            <TopNavButtonContainer onClick={verifiyShowModal}>
              <ButtonMarginTop data-authsort="login" main>
                로그인
              </ButtonMarginTop>
              <Button data-authsort="register" main>
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
  margin: 0 70px 0 20px;
  cursor: pointer;
`;

const LogoImg = styled.div`
  width: 200px;
  height: 120px;
  background: url(./images/libido_logo_new.png) no-repeat;
  background-position: center center;
  background-size: 200px 90px;
`;

const SearchBarContainer = styled.div`
  position: relative;

  .searchInfo {
    position: absolute;
    top: 23px;
    left: 25px;
    font-size: 18px;
    font-weight: 700;
    color: #3848a5;
  }

  .searchIcon {
    position: absolute;
    top: 13px;
    right: 80px;
    width: 30px;
    height: 30px;
    background: url(./images/icon_search.png) no-repeat;
    background-size: 35px 35px;
    background-position: center center;
  }
  .searchLine {
    position: absolute;
    top: 0;
    right: 120px;
    border-left: 1px solid #3848a5;
    height: 58px;
  }
`;
const RightSubMenu = styled.div`
  position: relative;

  .rightSubMenuLine {
    position: absolute;
    top: -20px;
    left: -15px;
    border-left: 1px solid #d9d9d9;
    height: 126px;
  }
`;

const TopNavButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 80px;
  padding-left: 30px;
`;

const ButtonMarginTop = styled(Button)`
  margin-bottom: 3px;
`;

const UserInfoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const UserProfileContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 35px;
`;

const UserFigure = styled.div`
  border: none;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  margin-right: 25px;
  background: url(./images/profile_test.jpeg) no-repeat;
  background-size: 60px 60px;
  background-position: center center;
`;

const UserName = styled.div`
  font-size: 18px;
  font-weight: 600;
  line-height: 1.4;
  color: #707070;

  .userName {
    font-size: 20px;
    font-weight: 700;
    color: #3848a5;
  }
`;

const UserCountContainer = styled.div`
  position: relative;
  color: #747474;
  text-align: center;

  & .userCountLine {
    position: absolute;
    left: -18px;
    border-left: 1px solid #d9d9d9;
    height: 90px;
  }

  & p:nth-child(1) {
    margin-bottom: 4px;
  }
  & .info {
    font-size: 20px;
    font-weight: 700;
    line-height: 1.4;
    color: #3848a5;
  }
`;

export default TopNav;
