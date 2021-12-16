import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector, batch, shallowEqual } from "react-redux";
import {
  initializeMainForm,
  content,
  rooms,
  isLoaded,
  increaseOffset,
} from "../modules/mainForm";
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

const MainFormContainer = () => {
  const dispatch = useDispatch();
  const [isIntersect, setIntersect] = useState(false);

  const { sort, contentList, roomList, currentOffset, currentIsLoaded } =
    useSelector(({ category, mainForm }) => ({
      sort: category.sort,
      contentList: mainForm.contentList,
      roomList: mainForm.roomList,
      currentOffset: mainForm.currentOffset,
      currentIsLoaded: mainForm.isLoaded,
    }));

  useEffect(() => {
    async function getMoreContents() {
      if (!isIntersect) return;

      dispatch(isLoaded());

      await new Promise(resolve => setTimeout(resolve, 1500));

      batch(() => {
        dispatch(content({ sort, currentOffset }));
        dispatch(rooms({ sort, currentOffset }));
        dispatch(increaseOffset());
      });
      dispatch(isLoaded());
      setIntersect(false);
    }
    getMoreContents();
  }, [isIntersect]);

  const onIntersect = async ([{ isIntersecting, target }], observer) => {
    if (isIntersecting) {
      observer.unobserve(target);
      setIntersect(true);
      observer.observe(target);
    }
  };

  useEffect(() => {
    batch(() => {
      dispatch(initializeMainForm());
      dispatch(content({ sort, currentOffset }));
      dispatch(rooms({ sort, currentOffset }));
      dispatch(increaseOffset());
    });
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

    return (
      <MainForm
        isLoaded={currentIsLoaded}
        onIntersect={onIntersect}
        // getMoreContents={getMoreContents}
        completeContents={completeContents}
      />
    );
  } else return null;
};

export default MainFormContainer;
