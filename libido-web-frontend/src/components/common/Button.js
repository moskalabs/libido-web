import React from "react";
import styled, { css } from "styled-components";

const StyledButton = styled.button`
  border: none;
  border-radius: 16px;
  font-size: 1rem;
  padding: 0.25rem 1rem;
  color: #fff;
  outline: none;
  cursor: pointer;

  ${props =>
    props.main &&
    css`
      width: 220px;
      line-height: 30px;
      background: #262f6a;
      &:hover {
        background: #1d2452;
      }
    `}
`;

const Button = props => <StyledButton {...props} />;

export default Button;
