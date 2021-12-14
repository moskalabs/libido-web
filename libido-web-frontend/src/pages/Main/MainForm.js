import React from "react";
import styled from "styled-components";
import MainContent from "./MainContent";

const MainForm = ({ isAddData, completeContents }) => {
  return (
    <Container>
      {completeContents.map(({ category, contents }, index) => {
        const currentCategory = category;
        return (
          <CategoryBox key={index}>
            <Name>{category}</Name>
            <ContentList>
              {contents.map((content, index) => {
                return (
                  <MainContent
                    key={index}
                    currentCategory={currentCategory}
                    content={content}
                  />
                );
              })}
            </ContentList>
          </CategoryBox>
        );
      })}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CategoryBox = styled.div`
  min-width: 840px;
  margin-right: 50px;
`;

const Name = styled.div`
  margin-bottom: 15px;
  font-size: 28px;
  font-weight: 600;
  color: #262f6a;
`;

const ContentList = styled.div`
  display: flex;
  justify-content: space-between;
  flex-flow: row wrap;
`;

export default MainForm;
