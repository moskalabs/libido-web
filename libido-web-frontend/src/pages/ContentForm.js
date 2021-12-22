import React from "react";
import styled from "styled-components";

const ContentForm = ({
  currentCategory,
  category,
  title,
  image_url,
  link_url,
}) => {
  const goToContentUrl = link => {
    window.open(link, "_blank");
  };

  return (
    <Container
      onClick={e => {
        goToContentUrl(link_url);
      }}
    >
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
        <ContentTitle>
          {title.length > 40 ? `${title.slice(0, 40)}...` : title}
        </ContentTitle>
        {currentCategory === "맞춤형 추천 영상" ||
        currentCategory === "인기영상" ||
        currentCategory === "검색 영상" ? (
          <ContentMedia>{category ? category : "youtube"}</ContentMedia>
        ) : (
          <LiveIntroduction>
            1~8화 정주행 방입니다. 어서오세요^^
          </LiveIntroduction>
        )}

        <ContentSubInfo>
          {currentCategory === "맞춤형 추천 영상" ||
          currentCategory === "인기영상" ||
          currentCategory === "검색 영상" ? (
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
  max-height: 350px;
  margin-bottom: 30px;
  background-color: #fff;
  border: 1px solid #d5d5d5;
  cursor: pointer;
`;

const ContentRunTimeContainer = styled.div``;

const Thumbnail = styled.div`
  width: 400px;
  height: 200px;
  background-image: url(${props => props.url && props.url});
  background-size: 400px 200px;
  background-repeat: no-repeat;
`;

const ContentInfoContainer = styled.div`
  max-width: 320px;
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
  left: 8px;
  width: 30px;
  height: 30px;

  &.live {
    top: 8px;
    background: url(./images/icon_live_navy.png) no-repeat;
    background-size: 30px 30px;
    background-position: center;
  }
  &.chat {
    top: 35px;
    background: url(./images/icon_chat_navy.png) no-repeat;
    background-size: 35px 35px;
    background-position: center;
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
