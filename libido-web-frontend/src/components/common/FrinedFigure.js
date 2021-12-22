import React from "react";
import styled from "styled-components";

const FriendFigure = ({ nickname, follows }) => {
  return (
    <Container>
      <UserFigure />
      <UserName>{nickname}</UserName>
      <UserFollower>
        친구 <span className="followerNumber">{follows}</span>
      </UserFollower>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 40px;
`;

const UserFigure = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  /* background-color: red; */
  background: url(./images/profile_test.jpeg) no-repeat;
  background-size: 150px 150px;
  background-position: center center;
`;

const UserName = styled.div`
  margin-top: 10px;
  font-size: 20px;
`;

const UserFollower = styled.div`
  margin-top: 8px;
  font-size: 18px;

  & .followerNumber {
    color: #262f6a;
    font-weight: 700;
  }
`;

export default FriendFigure;
