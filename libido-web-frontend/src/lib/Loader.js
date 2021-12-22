import { memo } from "react";
import ReactLoading from "react-loading";
import styled from "styled-components";

const Loader = () => {
  return (
    <Container>
      <ReactLoading type="spin" color="#262f6a" />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export default memo(Loader);
