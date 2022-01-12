import React from "react";
import styled from "styled-components";

const ModalTemplate = ({ children }) => {
  return (
    <StyledModalTemplate>
      <Inner>{children}</Inner>
    </StyledModalTemplate>
  );
};

const StyledModalTemplate = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Inner = styled.div`
  padding: 2rem;
  border: 1px #c4c3c2 solid;
  border-radius: 2px;
  z-index: 1011;
  background-color: #fff;
`;

export default ModalTemplate;
