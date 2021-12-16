import React, { useMemo, useEffect, useState, useRef } from "react";
import styled from "styled-components";
import Loader from "../../lib/Loader";
import MainContent from "./MainContent";

const MainForm = ({ isLoaded, onIntersect, completeContents }) => {
  // const [target, setTarget] = useState(null);
  const target = useRef(null);
  // const [isLoaded, setIsLoaded] = useState(false);

  // const onIntersect = async ([{ isIntersecting, target }], observer) => {
  //   if (isIntersecting && !isLoaded) {
  //     observer.unobserve(target);
  //     setIsLoaded(true);
  //     await getMoreContents();
  //     setIsLoaded(false);
  //     observer.observe(target);
  //   }
  // };

  useEffect(() => {
    let observer;
    if (target.current) {
      observer = new IntersectionObserver(onIntersect, {
        threshold: 0.4,
      });
      observer.observe(target.current);
    }

    return () => observer && observer.disconnect();
  }, []);

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
