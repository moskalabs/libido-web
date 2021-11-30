import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const TopNav = () => {
  return (
    <Container>
      <TopNavHeader>
        <LogoContainer />
        {/* <SearchBar /> */}
        <RightSubMenu>
          <MessageContainer>
            <MessageLogo />
            <MessageLink />
          </MessageContainer>
          {/* <Button /> */}
        </RightSubMenu>
      </TopNavHeader>
    </Container>
  );
};

const Container = styled.div``;

const TopNavHeader = styled.header``;

const LogoContainer = styled.div``;

const RightSubMenu = styled.div``;

const MessageContainer = styled.div``;

const MessageLogo = styled.img``;

const MessageLink = styled(Link)``;

export default TopNav;
