import React from "react";
import styled from "styled-components";
import SearchContainer from "../../containers/SearchContainer";
import ContentForm from "../ContentForm";

const MakeRoomForm = () => {
  return (
    <Container>
      <SearchBarContainer>
        <p className="titleFront">SEARCH</p>
        <SortBox>
          <span className="sort">전체</span>
        </SortBox>
        <SearchContainer sort="makeRoom" />
        <div className="searchIcon" />
      </SearchBarContainer>
      <ContentList>{/* <ContentForm /> */}</ContentList>
    </Container>
  );
};

const Container = styled.div``;

const SearchBarContainer = styled.div`
  position: relative;
  margin-bottom: 65px;

  & .titleFront {
    margin-bottom: 15px;
    font-size: 20px;
    font-weight: 600;
    letter-spacing: 1px;
  }
  & .searchIcon {
    position: absolute;
    top: 35px;
    right: 300px;
    width: 45px;
    height: 50px;
    padding-left: 66px;
    border-left: 1.3px solid #d0d0d0;
    background: url(./images/icon_search.png) no-repeat;
    background-size: 45px 45px;
    background-position: center center;
  }
`;

const SortBox = styled.div`
  position: absolute;
  top: 46px;
  left: 40px;
  display: inline-flex;
  align-items: center;
  cursor: pointer;

  & .sort {
    margin-top: 3px;
    font-size: 17px;
    font-weight: 400;
    color: #464646;
  }

  &::after {
    display: block;
    content: "";
    width: 1px;
    height: 28px;
    background-color: #e1e2e3;
    margin: auto 35px;
  }
`;

const ContentList = styled.ul`
  width: 1200px;
  height: 2000px;
  background-color: red;
`;

export default MakeRoomForm;
