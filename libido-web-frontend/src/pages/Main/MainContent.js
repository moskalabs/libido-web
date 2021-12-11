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
        <ChannelFigure />
        <RightContentInfoContainer>
          <ContentTitle>농장 경비견으로 키웠는데...</ContentTitle>
          <SubInfoContainer>
            <ContentSubInfo>조회수 51만회 ・ 10일전</ContentSubInfo>
          </SubInfoContainer>
          <ContentChannelName>포트포크</ContentChannelName>
        </RightContentInfoContainer>
        <ContentToggleButton />
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
  display: flex;
  padding: 15px 8px;
`;

const ChannelFigure = styled.figure`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: red;
`;

const RightContentInfoContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  margin: 0 20px 0 40px;
`;

const ContentTitle = styled.span`
  margin-bottom: 18px;
  color: #383838;
`;

const SubInfoContainer = styled.div`
  color: #848484;
  font-size: 14px;
  margin-bottom: 18px;
`;

const ContentChannelName = styled.div`
  color: #848484;
  font-size: 14px;
`;

const ContentSubInfo = styled.span``;

const ContentToggleButton = styled.button``;
export default MainContent;
