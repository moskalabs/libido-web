import React from "react";
import styled from "styled-components";

const MainContent = ({ content }) => {
  const { image_url } = content;

  return (
    <Container>
      <ContentRunTimeContainer>
        <span className="rumTime" />
      </ContentRunTimeContainer>
      <Thumbnail url={image_url} />
      <ContentInfoContainer>
        <ContentTitle>tvN드라마 그냥 사랑하는 사이</ContentTitle>
        <ContentMedia>YOUTUBE</ContentMedia>
        <ContentSubInfo>3시간 전 ・ 조회수 24만회</ContentSubInfo>
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
  padding: 15px 40px 45px;
`;

const ContentTitle = styled.div`
  margin-bottom: 8px;
  font-size: 20px;
  color: #383838;
`;

const ContentMedia = styled.div`
  margin-bottom: 8px;
  font-size: 18px;
  color: #848484;
`;

const ContentSubInfo = styled.div`
  color: #848484;
`;

export default MainContent;
