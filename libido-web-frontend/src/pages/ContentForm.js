import React from "react";
import styled from "styled-components";

const ContentForm = ({ currentCategory, content }) => {
  const { image_url } = content;

  return (
    <Container>
      {currentCategory === "맟춤형 추천 영상" ||
        (currentCategory === "인기영상" && (
          <ContentRunTimeContainer>
            <span className="rumTime" />
          </ContentRunTimeContainer>
        ))}
      <Thumbnail url={image_url} />
      <ContentInfoContainer>
        {(currentCategory === "맞춤 스트리밍" ||
          currentCategory === "인기 STREAMING" ||
          !currentCategory) && <LiveIcon className="live" />}
        {(currentCategory === "맞춤 스트리밍" ||
          currentCategory === "인기 STREAMING" ||
          !currentCategory) && <LiveIcon className="chat" />}
        <ContentTitle>tvN드라마 그냥 사랑하는 사이</ContentTitle>
        {currentCategory === "맞춤형 추천 영상" ||
        currentCategory === "인기영상" ? (
          <ContentMedia>YOUTUBE</ContentMedia>
        ) : (
          <LiveIntroduction>
            1~8화 정주행 방입니다. 어서오세요^^
          </LiveIntroduction>
        )}

        <ContentSubInfo>
          {currentCategory === "맞춤형 추천 영상" ||
          currentCategory === "인기영상" ? (
            <span>3시간 전 ・ 조회수 24만회</span>
          ) : (
            <span>Ji Sun Lee ・ 3시간 전 ・ 25명 시청중</span>
          )}
        </ContentSubInfo>
      </ContentInfoContainer>
    </Container>
  );
};

const Container = styled.div`
  margin-bottom: 30px;
  background-color: #fff;
  border: 1px solid #d5d5d5;
`;

const ContentRunTimeContainer = styled.div``;

const Thumbnail = styled.div`
  width: 400px;
  height: 200px;
  background-image: url(${props => props.url && props.url});
  background-size: 400px 200px;
  background-repeat: no-repeat;
  cursor: pointer;
`;

const ContentInfoContainer = styled.div`
  position: relative;
  padding: 15px 40px 45px;
`;

const ContentTitle = styled.div`
  margin-bottom: 8px;
  font-size: 20px;
  color: #383838;
`;

const LiveIcon = styled.div`
  position: absolute;
  left: 15px;
  width: 15px;
  height: 15px;
  background-color: blueviolet;

  &.live {
    top: 15px;
    /* background: url(./images/icon_live.png) no-repeat;
    background-size: 10px 10px;
    background-position: center; */
  }
  &.chat {
    top: 42px;
  }
`;

const ContentMedia = styled.div`
  margin-bottom: 8px;
  font-size: 18px;
  color: #848484;
`;

const LiveIntroduction = styled.div`
  margin-bottom: 8px;
  font-size: 18px;
  color: #848484;
`;

const ContentSubInfo = styled.div`
  color: #848484;
`;

export default ContentForm;
