import React, { useState, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initializeMainForm, content, rooms } from "../modules/mainForm";
import MainForm from "../pages/Main/MainForm";

const MainFormContainer = () => {
  const dispatch = useDispatch();
  const [prevCategoryState, setPrevCategoryState] = useState("libido");

  const { sort, contents, contentsError } = useSelector(
    ({ category, mainForm }) => ({
      sort: category.sort,
      contents: mainForm.contents,
      contentsError: mainForm.contentsError,
    })
  );

  console.log(contents, contentsError);
  console.log("mainForm");

  const identifyQuerySort = useCallback(() => {
    let verifyQuerySort = "";
    switch (sort) {
      case "libido":
        verifyQuerySort = "customize";
        break;
      case "trending":
        verifyQuerySort = "popular";
        break;
      default:
        verifyQuerySort = "customize";
        break;
    }
    return verifyQuerySort;
  }, [sort]);

  useEffect(() => {
    const querySort = identifyQuerySort();

    dispatch(initializeMainForm());
    dispatch(content(querySort, sort));
    dispatch(rooms(querySort, sort));
  }, [dispatch]);

  useEffect(() => {
    const querySort = identifyQuerySort();

    dispatch(content(querySort));
    dispatch(rooms(querySort));
  }, [dispatch, identifyQuerySort]);

  return <MainForm />;
};

export default MainFormContainer;
