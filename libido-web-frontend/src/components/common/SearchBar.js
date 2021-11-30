import React from "react";
import styled, { css } from "styled-components";

const StyledSearchBar = styled.input`
  border: 1px solid #4dbce9;
  border-radius: 100px;
  font-size: 15px;
  font-weight: 500;
  padding: 0 10px;
  &:focus {
    outline: none;
  }

  ${props =>
    props.topNav &&
    css`
      width: 600px;
      height: 50px;
    `}
`;

const SearchBar = props => <StyledSearchBar {...props} />;

export default SearchBar;
