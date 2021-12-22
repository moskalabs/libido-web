import React from "react";
import styled, { css } from "styled-components";

const StyledSearchBar = styled.input`
  border: 1px solid #262f6a;
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
      width: 890px;
      height: 58px;
      margin-right: 115px;
      padding: 0 30px;
    `}
`;

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

export default SearchBar;
