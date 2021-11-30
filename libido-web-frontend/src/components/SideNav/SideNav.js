import React from "react";
import styled from "styled-components";

const SideNav = () => {
  return (
    <Container>
      <SideNavHeader>
        <ToggleButton>토글</ToggleButton>
        <IconContainer>
          <IconBox>
            <Icon data-button="home">버튼</Icon>
            <p>홈</p>
          </IconBox>
          <IconBox>
            <Icon data-button="room">버튼</Icon>
            <p>방만들기</p>
          </IconBox>
          <IconBox>
            <Icon data-button="search">버튼</Icon>
            <p>검색</p>
          </IconBox>
          <IconBox>
            <Icon data-button="setting">버튼</Icon>
            <p>설정</p>
          </IconBox>
        </IconContainer>
      </SideNavHeader>
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  max-width: 46px;
  height: 100%;
  padding: 0 46px 0;
  border: none;
  border-radius: 30px;
  background-color: blueviolet;
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
  background-color: burlywood;
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
`;

export default SideNav;
