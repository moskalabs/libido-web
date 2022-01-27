import React from "react";
import styled, { css } from "styled-components";
import client from "../lib/api/client";

const ContentForm = ({
  room_id,
  currentCategory,
  category,
  title,
  image_url,
  setModalVisible,
  sort,
  pickContentForm,
}) => {
  const entryContentRoom = () => {
    //개인방에 들어가기 전에 서버와 통신하는 함수입니다. 실제 방은 만들어져 있지 않아, UI 관련 기능을 구현하지 못했습니다.
    const accessToken = localStorage.getItem("access_token");

    client
      .post(
        "http://15.164.210.185:8000/users/history",
        { room_id },
        {
          headers: {
            Authorization: accessToken,
          },
        }
      )
      .then(res => console.log(res));
  };

  return (
    <Container
      className="contentForm"
      onClick={event => {
        //별도 모듈 함수 분리 필요
        if (
          currentCategory === "맞춤 스트리밍" ||
          currentCategory === "인기 STREAMING" ||
          sort === "makeRoom"
        ) {
          pickContentForm(event);
          // setModalVisible(room_id, title, image_url);
        } else setModalVisible(room_id, title, image_url);
      }}
    >
      {currentCategory === "맟춤형 추천 영상" ||
        (currentCategory === "인기영상" && (
          <ContentRunTimeContainer>
            <span className="rumTime" />
          </ContentRunTimeContainer>
        ))}
      <Thumbnail
        alt="source"
        src={image_url}
        data-img={image_url}
        sort={sort}
        className="thumbnail"
      />
      <ContentInfoContainer sort={sort}>
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
            <span>
              Ji Sun Lee ・ 3시간 전 ・ <span className="viewCount">25</span>명
              시청중
            </span>
          )}
        </ContentSubInfo>
      </ContentInfoContainer>
    </Container>
  );
};

const Container = styled.div`
  max-height: 335px;
  margin-bottom: 30px;
  background-color: #fff;
  cursor: pointer;
`;

const ContentRunTimeContainer = styled.div``;

const Thumbnail = styled.img`
  width: 400px;
  height: 200px;
  /* background-image: url(${props => props.url && props.url}); */
  background-size: 400px 200px;
  background-repeat: no-repeat;

  ${({ sort }) =>
    sort === "makeRoom" &&
    css`
      width: 380px;
      height: 200px;
      background-size: 380px 200px;
    `}
`;

const ContentInfoContainer = styled.div`
  max-width: 380px;
  position: relative;
  padding: 15px 0px 45px 40px;

  ${({ sort }) =>
    sort === "makeRoom" &&
    css`
      padding: 15px 32px 45px 40px;
    `}
`;

const ContentTitle = styled.div`
  margin-bottom: 8px;
  font-size: 20px;
  font-weight: 600;
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

  & .viewCount {
    font-size: 18px;
    font-weight: 700;
    color: #3848a5;
  }
`;

export default ContentForm;
