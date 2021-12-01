import React from "react";
import styled from "styled-components";

const SideNav = () => {
  return (
    <Container>
      <SideNavHeader>
        <ToggleButton />
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
            <Icon className="search" data-button="search" />
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
  max-width: 46px;
  height: 100%;
  padding: 0 46px 0;
  border: none;
  border-radius: 30px;
  background-color: #fff;
`;

const SideNavHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 25px;
`;

const ToggleButton = styled.button`
  border: none;
  width: 50px;
  height: 50px;
  cursor: pointer;
  background: url(./images/toggle.svg) no-repeat;
  background-size: 30px 30px;
  background-position: center center;
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`;

const IconBox = styled.div`
  margin-bottom: 20px;
  text-align: center;

  p {
    margin-top: 3px;
    font-size: 13px;
    color: #707070;
  }
`;

const Icon = styled.button`
  border: none;
  width: 50px;
  height: 50px;

  &.home {
    background: url(./images/home.svg) no-repeat;
    background-size: 30px 30px;
    background-position: center center;
  }

  &.room {
    background: url(./images/room.png) no-repeat;
    background-size: 50px 50px;
    background-position: center center;
  }

  &.search {
    background: url(./images/search.svg) no-repeat;
    background-size: 30px 30px;
    background-position: center center;
  }

  &.setting {
    background: url(./images/setting.svg) no-repeat;
    background-size: 30px 30px;
    background-position: center center;
  }
`;

export default SideNav;
