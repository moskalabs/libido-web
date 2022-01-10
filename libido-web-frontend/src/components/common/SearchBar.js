import React from "react";
import styled, { css } from "styled-components";

const SearchBar = ({
  topNav,
  placeholder,
  changeKeyword,
  searchKeyword,
  keyword,
}) => {
  return (
    <StyledSearchBar
      topNav={topNav}
      placeholder={placeholder}
      onChange={changeKeyword}
      onKeyPress={searchKeyword}
      value={keyword}
    />
  );
};

const StyledSearchBar = styled.input`
  border: 1.5px solid #3848a5;
  border-radius: 100px;
  font-size: 20px;
  font-weight: 500;
  padding: 0 10px;
  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #d3d1d1;
  }

  ${props =>
    props.topNav &&
    css`
      width: 1100px;
      height: 60px;
      margin-right: 60px;
      padding: 0 120px;
    `}
`;

export default SearchBar;
