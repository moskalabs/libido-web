import React from "react";
import styled from "styled-components";

const SideNav = () => {
  return (
    <Container>
      <SideNavHeader>
        <MenuButton />
        <IconContainer>
          <IconBox>
            <Icon className="home" data-button="home" />
            <p>홈</p>
          </IconBox>
          <IconBox>
            <Icon className="room" data-button="room" />
            <p>방만들기</p>
          </IconBox>
          <IconBox>
            <Icon className="live" data-button="live" />
            <p>검색</p>
          </IconBox>
          <IconBox>
            <Icon className="setting" data-button="setting" />
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
  background-color: #262f6a;
`;

const SideNavHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 25px;
`;

const MenuButton = styled.button`
  width: 50px;
  height: 50px;
  border: none;
  cursor: pointer;
  background: url(./images/icon_menu.png) no-repeat;
  background-size: 45px 45px;
  background-position: center center;
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 45px;
`;

const IconBox = styled.div`
  margin-bottom: 50px;
  text-align: center;

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
