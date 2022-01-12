import React from "react";
import styled from "styled-components";
import Button from "./Button";

const MakeRoomInfoModal = ({ modalInfo, hide }) => {
  const [room_id, title, image_url] = modalInfo;

  return (
    <Container>
      <ContentFigure alt="contentImg" src={image_url} />
      <ContentTitle>{title}</ContentTitle>
      <ContentSubInfo>
        드라마 리뷰텔러 · 3시간 전 · 조회수 2,456회
      </ContentSubInfo>
      <ButtonContainer>
        <MarginRightButton makeRoomModal>방만들기</MarginRightButton>
        <Button onClick={hide} makeRoomModal makeRoomClose>
          닫기
        </Button>
      </ButtonContainer>
    </Container>
  );
};

const Container = styled.div``;

const ContentFigure = styled.img`
  width: 700px;
  height: 450px;
  margin-bottom: 15px;
`;

const ContentTitle = styled.p`
  font-size: 25px;
  font-weight: 600;
  margin-bottom: 10px;
`;

const ContentSubInfo = styled.p`
  font-size: 18px;
  color: #707070;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 25px;
`;

const MarginRightButton = styled(Button)`
  margin-right: 10px;
`;

export default MakeRoomInfoModal;
