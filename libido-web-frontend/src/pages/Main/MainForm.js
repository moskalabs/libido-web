import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import Loader from "../../lib/Loader";
import MainContent from "./MainContent";

const MainForm = ({ isLoaded, isIntersect, onIntersect, completeContents }) => {
  const target = useRef(null);

  useEffect(() => {
    if (isIntersect && isLoaded) return;
    let observer;
    if (target.current) {
      observer = new IntersectionObserver(onIntersect);
      observer.observe(target.current);
    }

    return () => observer && observer.disconnect();
  }, [target.current, isIntersect, isLoaded]);

  return (
    <Container>
      <ContentsContainer>
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
      </ContentsContainer>
      <div ref={target} className="targetElement">
        {isLoaded && <Loader />}
      </div>
    </Container>
  );
};

const Container = styled.div`
  & .targetElement {
    width: 140px;
    height: 140px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;

const ContentsContainer = styled.div`
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
