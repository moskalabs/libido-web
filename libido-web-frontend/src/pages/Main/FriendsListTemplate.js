import React from "react";
import styled from "styled-components";
import { SwiperSlide } from "swiper/react";
import CarouselSlider from "../../lib/CarouselSlider";
import FriendFigure from "../../components/common/FrinedFigure";

const FriendsListTemplate = ({ completeContents }) => {
  return (
    <Container>
      <Name>맞춤친구 추천</Name>
      <CarouselSlider>
        {completeContents[0].map((friendList, index) => {
          return (
            <SwiperSlide key={index}>
              <FriendList>
                {friendList.map(
                  ({ id, nickname, image_url, follows }, index) => {
                    return (
                      <FriendFigure
                        key={index}
                        nickname={nickname}
                        image_url={image_url}
                        follows={follows}
                      />
                    );
                  }
                )}
              </FriendList>
            </SwiperSlide>
          );
        })}
      </CarouselSlider>
    </Container>
  );
};

const Container = styled.div`
  margin-bottom: 80px;
  padding-right: 50px;
`;

const Name = styled.div`
  margin-bottom: 15px;
  font-size: 28px;
  font-weight: 600;
  color: #161616;
`;

const FriendList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 25px;
  border-radius: 8px;
`;

export default FriendsListTemplate;
