import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SearchContainer from "../../containers/SearchContainer";
import ContentForm from "../ContentForm";
import client from "../../lib/api/client";

const MakeRoomForm = () => {
  const [test, setTest] = useState([]);
  useEffect(() => {
    const testFunc = () => {
      client
        .get("http://localhost:3000/data/contentPopular.json")
        .then(res => setTest(test.concat(res.data.message)));
    };
    testFunc();
  }, []);
  console.log(test);
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
      <ContentList>
        {test.map(({ id, title, image_url }, index) => {
          return (
            <ContentForm
              key={index}
              currentCategory="인기영상"
              title={title}
              image_url={image_url}
            />
          );
        })}
      </ContentList>
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

const ContentList = styled.ul``;

export default MakeRoomForm;
