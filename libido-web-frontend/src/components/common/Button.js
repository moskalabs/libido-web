import React from "react";
import styled, { css } from "styled-components";

const StyledButton = styled.button`
  border: none;
  border-radius: 16px;
  font-size: 1rem;
  padding: 0.25rem 1rem;
  background: #3848a5;
  color: #fff;
  outline: none;
  cursor: pointer;

  ${props =>
    props.main &&
    css`
      width: 220px;
      line-height: 30px;

      &:hover {
        background: #344397;
      }
    `}

  ${props =>
    props.makeRoomModal &&
    css`
      width: 150px;
      line-height: 50px;
      font-size: 1.2rem;
      border-radius: 5px;
    `}

    ${props =>
    props.makeRoomClose &&
    css`
      background: #fff;
      color: #1c1c1c;
      border: 1px solid #a8a8a8;
    `}

    ${props =>
    props.playTrack &&
    css`
      position: absolute;
      right: 300px;
      width: 130px;
      margin-top: 30px;
      line-height: 35px;
      border-radius: 4px;
    `}
`;

const Button = props => <StyledButton {...props} />;

export default Button;
