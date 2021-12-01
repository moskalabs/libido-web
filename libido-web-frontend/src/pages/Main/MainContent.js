import React from "react";
import styled from "styled-components";

const MainContent = () => {
  return (
    <Container>
      <Thumbnail />
    </Container>
  );
};

const Container = styled.div`
  margin-bottom: 30px;
`;

const Thumbnail = styled.div`
  width: 280px;
  height: 200px;
  background-color: beige;
`;

export default MainContent;
