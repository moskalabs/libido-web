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
