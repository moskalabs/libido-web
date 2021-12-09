import React from "react";
import styled from "styled-components";
import MainContent from "./MainContent";

const MainForm = ({ completeContents }) => {
  return (
    <Container>
      {completeContents.map(({ category, contents }, index) => {
        return (
          <CategoryBox key={index}>
            <Name>{category}</Name>
            <ContentList>
              {contents.map((content, index) => {
                return <MainContent key={index} content={content} />;
              })}
            </ContentList>
          </CategoryBox>
        );
      })}
    </Container>
  );
};

const Container = styled.div``; //flex-direction row wrap으로 전체 수직 정렬(2row)

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
  //flex-direction row wrap으로으로 세부 리스트 정렬(2row)
  display: flex;
  justify-content: space-between;
  flex-flow: row wrap;
`;

export default MainForm;
