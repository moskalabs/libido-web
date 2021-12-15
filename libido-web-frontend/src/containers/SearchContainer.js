import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  initializeKeyword,
  changeField,
  searchTopNavKeyword,
} from "../modules/search";
import SearchBar from "../components/common/SearchBar";

const SearchContainer = props => {
  const dispatch = useDispatch();

  const { keyword } = useSelector(({ search }) => ({
    keyword: search.topNav.keyword,
  }));

  const searchKeyword = useCallback(
    event => {
      const currentKeyDown = event.key;
      if (currentKeyDown === "Enter") {
        dispatch(searchTopNavKeyword(keyword));
        // dispatch(initializeKeyword("topNav"));
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
      {...props}
    />
  );
};

export default SearchContainer;
