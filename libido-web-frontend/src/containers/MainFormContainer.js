import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initializeMainForm, content, rooms } from "../modules/mainForm";
import MainForm from "../pages/Main/MainForm";

const bindingCategoryToContents = (categorySort, curContents) => {
  const firstCategoryName =
    categorySort === "libido" ? "맞춤형 추천 영상" : "인기영상";
  const secondeCategoryName =
    categorySort === "libido" ? "맞춤 스트리밍" : "인기 STREAMING";
  const firstContents = {
    category: firstCategoryName,
    contents: curContents.slice(0, 8),
  };
  const secondContents = {
    category: secondeCategoryName,
    contents: curContents.slice(8, 16),
  };

  const joinContents = [firstContents, secondContents];
  return joinContents;
};

const scrollTop = () => {
  window.scrollTo(0, 0);
};

const MainFormContainer = () => {
  const dispatch = useDispatch();

  const { sort, contents, contentsError } = useSelector(
    ({ category, mainForm }) => ({
      sort: category.sort,
      contents: mainForm.contents,
      contentsError: mainForm.contentsError,
    })
  );

  useEffect(() => {
    dispatch(initializeMainForm());
    dispatch(content(sort));
    dispatch(rooms(sort));

    scrollTop();
  }, [dispatch, sort]);

  const curContentsNum = contents.length;
  const completeContentsNum = 16;

  if (curContentsNum === completeContentsNum) {
    const completeContents = bindingCategoryToContents(sort, contents);

    return <MainForm completeContents={completeContents} />;
  } else return null;
};

export default MainFormContainer;
