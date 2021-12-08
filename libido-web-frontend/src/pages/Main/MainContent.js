import React from "react";
import styled from "styled-components";

const MainContent = ({ content }) => {
  const { image_url } = content;

  return (
    <Container>
      <Thumbnail url={image_url} />
    </Container>
  );
};

const Container = styled.div`
  margin-bottom: 30px;
`;

const Thumbnail = styled.div`
  width: 280px;
  height: 200px;
  background-image: url(${props => props.url && props.url});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  cursor: pointer;
`;

export default MainContent;
