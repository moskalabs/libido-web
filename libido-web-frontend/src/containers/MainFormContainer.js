import React, { useEffect, useState } from "react";
import { useDispatch, useSelector, batch, shallowEqual } from "react-redux";
import {
  initializeMainForm,
  content,
  rooms,
  friendList,
  friends,
  isLoaded,
  increaseOffset,
} from "../modules/mainForm";
import { bindingCategoryToContents } from "../lib/bindingCategoryToContents";
import { resetPageScroll } from "../lib/resetPageScroll";
import MainForm from "../pages/Main/MainForm";

const MainFormContainer = () => {
  const dispatch = useDispatch();

  const sort = useSelector(({ category }) => category.sort);

  const {
    contentList,
    roomList,
    recommendFriendList,
    friendsContentList,
    currentIsLoaded,
  } = useSelector(
    ({ mainForm }) => ({
      contentList: mainForm.contentList,
      roomList: mainForm.roomList,
      recommendFriendList: mainForm.recommendFriendList,
      friendsContentList: mainForm.friendsContentList,
      currentIsLoaded: mainForm.isLoaded,
    }),
    shallowEqual
  );

  const currentOffset = useSelector(({ mainForm }) => mainForm.currentOffset);
  const [isIntersect, setIntersect] = useState(false);

  useEffect(() => {
    async function getMoreContents() {
      if (!isIntersect) return;

      dispatch(isLoaded());

      await new Promise(resolve => setTimeout(resolve, 1500));

      if (sort === "friends") {
        batch(() => {
          dispatch(friends(currentOffset));
        });
      } else {
        batch(() => {
          dispatch(content({ sort, currentOffset }));
          dispatch(rooms({ sort, currentOffset }));
        });
      }

      dispatch(isLoaded());
      setIntersect(false);
    }
    getMoreContents();
  }, [isIntersect, currentOffset]);

  const onIntersect = async ([{ isIntersecting, target }], observer) => {
    if (isIntersecting) {
      observer.unobserve(target);
      dispatch(increaseOffset());
      setIntersect(true);
    }
  };

  useEffect(() => {
    dispatch(initializeMainForm());

    if (sort === "friends") {
      batch(() => {
        dispatch(friendList());
        dispatch(friends());
      });
    } else {
      batch(() => {
        dispatch(content({ sort }));
        dispatch(rooms({ sort }));
      });
    }

    resetPageScroll();
  }, [dispatch, sort]);

  let completeContents;
  let curContentsNum;
  const completeContentsNum = 16;

  if (sort === "friends") {
    const curRecommendFriendListNum = recommendFriendList[0]
      ? recommendFriendList[0].length
      : 0;
    const curFriendsContentListNum = friendsContentList.length;

    curContentsNum = curRecommendFriendListNum + curFriendsContentListNum;
    completeContents = [recommendFriendList, friendsContentList];

    if (curContentsNum >= completeContentsNum) {
      return (
        <MainForm
          isLoaded={currentIsLoaded}
          isIntersect={isIntersect}
          onIntersect={onIntersect}
          completeContents={completeContents}
          currentCategorySort={sort}
        />
      );
    } else return null;
  } else if (sort === "libido" || sort === "trending") {
    const curContentListNum = contentList.length;
    const curRoomListNum = roomList.length;

    curContentsNum = curContentListNum + curRoomListNum;

    if (curContentsNum >= completeContentsNum) {
      completeContents = bindingCategoryToContents(sort, contentList, roomList);

      return (
        <MainForm
          isLoaded={currentIsLoaded}
          isIntersect={isIntersect}
          onIntersect={onIntersect}
          completeContents={completeContents}
          currentCategorySort={sort}
        />
      );
    } else return null;
  }
};

export default MainFormContainer;
