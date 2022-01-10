import React, { useEffect, useRef } from "react";
import styled, { css } from "styled-components";
import FriendsListTemplate from "../Main/FriendsListTemplate";
import Loader from "../../lib/Loader";
import ContentForm from "../ContentForm";

const MainForm = ({
  isLoaded,
  isIntersect,
  onIntersect,
  completeContents,
  currentCategorySort,
}) => {
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
      {currentCategorySort === "libido" ||
      currentCategorySort === "trending" ? (
        <ContentsContainer sort={currentCategorySort}>
          {completeContents.map(({ category, contents }, index) => {
            const currentCategory = category;
            return (
              <CategoryBox key={index}>
                <Name>{category}</Name>
                <ContentList>
                  {contents.map(
                    ({ id, category, link_url, title, image_url }, index) => {
                      return (
                        <ContentForm
                          key={index}
                          room_id={id}
                          currentCategory={currentCategory}
                          category={category}
                          title={title}
                          image_url={image_url}
                          link_url={link_url}
                        />
                      );
                    }
                  )}
                </ContentList>
              </CategoryBox>
            );
          })}
        </ContentsContainer>
      ) : (
        <>
          <FriendsListTemplate completeContents={completeContents} />
          <ContentsContainer>
            <CategoryBox>
              <Name>친구 스트리밍</Name>
              <ContentList>
                {completeContents[1].map(
                  ({ category, title, image_url, link_url }, index) => {
                    return (
                      <ContentForm
                        key={index}
                        category={category}
                        title={title}
                        image_url={image_url}
                        link_url={link_url}
                      />
                    );
                  }
                )}
              </ContentList>
            </CategoryBox>
          </ContentsContainer>
        </>
      )}
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
  ${({ sort }) =>
    (sort === "libido" || sort === "trending") &&
    css`
      display: flex;
      justify-content: space-between;
    `}
`;

const CategoryBox = styled.div`
  min-width: 840px;
  margin-right: 50px;
`;

const Name = styled.div`
  margin-bottom: 15px;
  font-size: 28px;
  font-weight: 600;
  color: #161616;
`;

const ContentList = styled.div`
  display: flex;
  justify-content: space-between;
  flex-flow: row wrap;
`;

export default MainForm;
