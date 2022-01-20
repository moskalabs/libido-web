import React from "react";
import styled, { css } from "styled-components";

const SearchBar = ({
  sort,
  placeholder,
  changeKeyword,
  searchKeyword,
  keyword,
}) => {
  return (
    <StyledSearchBar
      sort={sort}
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

  ${({ sort }) =>
    sort === "topNav" &&
    css`
      width: 1100px;
      line-height: 60px;
      margin-right: 60px;
      padding: 0 120px;
    `}

  ${({ sort }) =>
    sort === "makeRoom" &&
    css`
      width: 1200px;
      padding: 2px 125px;
      font-weight: 400;
      line-height: 45px;
      border: 1.3px solid #d0d0d0;
      border-radius: 5px;
    `}
`;

export default SearchBar;
