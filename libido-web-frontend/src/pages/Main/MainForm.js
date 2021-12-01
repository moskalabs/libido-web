import React from "react";
import styled from "styled-components";
import MainContent from "./MainContent";

const MainForm = () => {
  return (
    <Container>
      <CategoryBox>
        <Name>맞춤형 추천 영상</Name>
        <ContentList>
          <MainContent />
          <MainContent />
          <MainContent />
          <MainContent />
          <MainContent />
          <MainContent />
          <MainContent />
          <MainContent />
        </ContentList>
      </CategoryBox>
      <CategoryBox>
        <Name>개인별 맞춤 영상</Name>
        <ContentList>
          <MainContent />
          <MainContent />
          <MainContent />
          <MainContent />
          <MainContent />
          <MainContent />
          <MainContent />
          <MainContent />
        </ContentList>
      </CategoryBox>
    </Container>
  );
};

const Container = styled.div``;

const CategoryBox = styled.div`
  margin-bottom: 10px;
`;

const Name = styled.div`
  margin-bottom: 20px;
  font-size: 25px;
  font-weight: 500;
  color: #707070;
`;

const ContentList = styled.div`
  display: flex;
  justify-content: space-between;
  flex-flow: row wrap;
`;

export default MainForm;
