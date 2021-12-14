import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initializeMainForm, content, rooms } from "../modules/mainForm";
import MainForm from "../pages/Main/MainForm";

const bindingCategoryToContents = (categorySort, curContents, curRooms) => {
  const firstCategoryName =
    categorySort === "libido" ? "맞춤형 추천 영상" : "인기영상";
  const secondeCategoryName =
    categorySort === "libido" ? "맞춤 스트리밍" : "인기 STREAMING";

  const firstContents = {
    category: firstCategoryName,
    contents: curContents,
  };
  const secondContents = {
    category: secondeCategoryName,
    contents: curRooms,
  };

  const joinContents = [firstContents, secondContents];
  return joinContents;
};

const scrollTop = () => {
  window.scrollTo(0, 0);
};

const MainFormContainer = ({ isScrollEnd, resetIsScrollEnd }) => {
  const dispatch = useDispatch();

  const { sort, contentList, roomList, contentListError, roomsListError } =
    useSelector(({ category, mainForm }) => ({
      sort: category.sort,
      contentList: mainForm.contentList,
      roomList: mainForm.roomList,
      contentListError: mainForm.contentListError,
      roomListError: mainForm.roomListError,
    }));

  useEffect(() => {
    if (!isScrollEnd) return;
    resetIsScrollEnd();

    dispatch(content(sort));
    dispatch(rooms(sort));
  });

  useEffect(() => {
    dispatch(initializeMainForm());
    dispatch(content(sort));
    dispatch(rooms(sort));

    scrollTop();
  }, [dispatch, sort]);

  const curContentsNum = contentList.length + roomList.length;
  const completeContentsNum = 16;

  if (curContentsNum >= completeContentsNum) {
    const completeContents = bindingCategoryToContents(
      sort,
      contentList,
      roomList
    );
    console.log(completeContents);
    return <MainForm completeContents={completeContents} />;
  } else return null;
};

export default MainFormContainer;
