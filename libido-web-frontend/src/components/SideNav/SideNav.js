import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const SideNav = () => {
  const navigate = useNavigate();

  const linkToPage = linkUrl => {
    navigate(`/${linkUrl}`);
  };

  const checkButtonSort = event => {
    const targetElement = event.target.className;

    if (targetElement === "BUTTON") return;

    const buttonSort = event.target.dataset.buttonsort;

    switch (buttonSort) {
      case "home":
        linkToPage();
        break;
      case "room":
        linkToPage("makeRoom");
        break;
      case "live":
        linkToPage();
        break;
      case "setting":
        linkToPage();
        break;
      default:
        break;
    }
  };

  return (
    <Container>
      <SideNavHeader>
        <IconContainer onClick={checkButtonSort}>
          <IconBox>
            <Icon className="home" data-buttonsort="home" />
            <p>홈</p>
          </IconBox>
          <IconBox>
            <Icon className="room" data-buttonsort="room" />
            <p>방만들기</p>
          </IconBox>
          <IconBox>
            <Icon className="live" data-buttonsort="live" />
            <p>검색</p>
          </IconBox>
          <IconBox>
            <Icon className="setting" data-buttonsort="setting" />
            <p>설정</p>
          </IconBox>
        </IconContainer>
      </SideNavHeader>
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  padding: 0 33px 0;
  border: none;
  background-color: #3848a5;
  z-index: 30;
`;

const SideNavHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 75px;
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 45px;
`;

const IconBox = styled.div`
  margin-bottom: 50px;
  text-align: center;
  cursor: pointer;

  p {
    font-size: 14px;
    font-weight: 100;
    color: #ffffff;
  }
`;

const Icon = styled.button`
  border: none;
  width: 50px;
  height: 50px;
  cursor: pointer;

  &.home {
    background: url(./images/icon_home.png) no-repeat;
    background-size: 40px 40px;
    background-position: center center;
  }

  &.room {
    background: url(./images/icon_room.png) no-repeat;
    background-size: 50px 50px;
    background-position: center center;
  }

  &.live {
    background: url(./images/icon_live.png) no-repeat;
    background-size: 50px 50px;
    background-position: center center;
  }

  &.setting {
    background: url(./images/icon_setting.png) no-repeat;
    background-size: 45px 45px;
    background-position: center center;
  }
`;

export default SideNav;
