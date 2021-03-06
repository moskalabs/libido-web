import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  initializeKeyword,
  changeField,
  searchCurrentKeyword,
} from "../modules/search";
import SearchBar from "../components/common/SearchBar";

const SearchContainer = props => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { keyword } = useSelector(({ search }) => ({
    keyword: search.keyword,
  }));

  const searchKeyword = useCallback(
    event => {
      const currentKeyDown = event.key;
      if (currentKeyDown === "Enter") {
        dispatch(initializeKeyword());
        dispatch(searchCurrentKeyword(keyword));
        navigate(`/detail?search=${keyword}`);
      }
    },
    [dispatch, keyword]
  );
  // const searchTopNavKeyword = useCallback(
  //   event => {
  //     const currentKeyDown = event.key;
  //     if (currentKeyDown === "Enter") {
  //       dispatch(searchTopNavKeyword(keyword));
  //       initializeKeyword("topNav");
  //     }
  //   },
  //   [dispatch, keyword]
  // );

  const changeTopNavKeyword = useCallback(
    event => {
      const currentKeyword = event.target.value;

      dispatch(changeField({ form: "topNav", value: currentKeyword }));
    },
    [dispatch]
  );

  return (
    <SearchBar
      changeKeyword={changeTopNavKeyword}
      searchKeyword={searchKeyword}
      keyword={keyword}
      {...props}
    />
  );
};

export default SearchContainer;
