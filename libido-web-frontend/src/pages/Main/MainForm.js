import React from "react";
import styled from "styled-components";
import MainFeed from "./MainFeed";

const MainForm = () => {
  return (
    <Container>
      <CategoryBox>
        <CategoryName>맞춤형 추천 영상</CategoryName>
        <CategoryList>
          <MainFeed />
          <MainFeed />
          <MainFeed />
          <MainFeed />
          <MainFeed />
          <MainFeed />
          <MainFeed />
          <MainFeed />
        </CategoryList>
      </CategoryBox>
      <CategoryBox>
        <CategoryName>개인별 맞춤 영상</CategoryName>
        <CategoryList>
          <MainFeed />
          <MainFeed />
          <MainFeed />
          <MainFeed />
          <MainFeed />
          <MainFeed />
          <MainFeed />
          <MainFeed />
        </CategoryList>
      </CategoryBox>
    </Container>
  );
};

const Container = styled.div``;

const CategoryBox = styled.div`
  margin-bottom: 10px;
`;

const CategoryName = styled.div`
  margin-bottom: 20px;
  font-size: 25px;
  font-weight: 500;
  color: #707070;
`;

const CategoryList = styled.div`
  display: flex;
  justify-content: space-between;
  flex-flow: row wrap;
`;

export default MainForm;
