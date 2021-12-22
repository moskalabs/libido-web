import React, { useEffect, useRef } from "react";
import styled, { css } from "styled-components";
import Loader from "../../lib/Loader";
import ContentForm from "../ContentForm";
import FriendFigure from "../../components/common/FrinedFigure";

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
                    ({ category, link_url, title, image_url }, index) => {
                      return (
                        <ContentForm
                          key={index}
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
          <FriendsContainer>
            <Name>맞춤친구 추천</Name>
            <FriendList>
              {completeContents[0].map(
                ({ id, nickname, image_url, follows }, index) => {
                  return (
                    <FriendFigure
                      nickname={nickname}
                      image_url={image_url}
                      follows={follows}
                      key={index}
                    />
                  );
                }
              )}
            </FriendList>
          </FriendsContainer>
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

const FriendsContainer = styled.div`
  margin-bottom: 80px;
  padding-right: 50px;
`;

const FriendList = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 25px;
  border-radius: 8px;
  overflow: scroll;
  background-color: #fff;
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
