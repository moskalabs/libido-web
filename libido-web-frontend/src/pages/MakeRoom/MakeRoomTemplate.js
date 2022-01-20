import React from "react";
import styled from "styled-components";

const MakeRoomTemplate = ({ children }) => {
  return <MakeRoomTemplateStyle>{children}</MakeRoomTemplateStyle>;
};

const MakeRoomTemplateStyle = styled.div`
  padding: 30px 0 0 300px;
`;

export default MakeRoomTemplate;
