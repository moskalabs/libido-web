import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initializeMainForm, content, rooms } from "../modules/mainForm";
import MainForm from "../pages/Main/MainForm";

const MainFormContainer = () => {
  const dispatch = useDispatch();
  // const [prevCategoryState, setPrevCategoryState] = useState("libido");

  const { sort, contents, contentsError } = useSelector(
    ({ category, mainForm }) => ({
      sort: category.sort,
      contents: mainForm.contents,
      contentsError: mainForm.contentsError,
    })
  );

  console.log(contents, contentsError);

  useEffect(() => {
    dispatch(initializeMainForm());
    dispatch(content(sort));
    dispatch(rooms(sort));
  }, [dispatch, sort]);

  useEffect(() => {
    dispatch(content("libido"));
    dispatch(rooms("libido"));
  }, [dispatch]);

  return <MainForm />;
};

export default MainFormContainer;
