import React, { useEffect, useState } from "react";
import { useDispatch, useSelector, batch, shallowEqual } from "react-redux";
import {
  initializeMainForm,
  content,
  rooms,
  isLoaded,
  increaseOffset,
} from "../modules/mainForm";
import {
  initializeFriends,
  friendList,
  friendsContent,
  increaseFriendsOffset,
} from "../modules/friends";
import { bindingCategoryToContents } from "../lib/bindingCategoryToContents";
import { resetPageScroll } from "../lib/resetPageScroll";
import MainForm from "../pages/Main/MainForm";

const MainFormContainer = () => {
  const dispatch = useDispatch();

  const sort = useSelector(({ category }) => category.sort);

  const { contentList, roomList } = useSelector(
    ({ mainForm }) => ({
      contentList: mainForm.contentList,
      roomList: mainForm.roomList,
    }),
    shallowEqual
  );

  const { recommendFriendList, friendsContentList } = useSelector(
    ({ friends }) => ({
      recommendFriendList: friends.recommendFriendList,
      friendsContentList: friends.friendsContentList,
    })
  );

  const currentOffset = useSelector(({ mainForm }) => mainForm.currentOffset);
  const currentIsLoaded = useSelector(({ mainForm }) => mainForm.isLoaded);

  const [isIntersect, setIntersect] = useState(false);

  useEffect(() => {
    async function getMoreContents() {
      if (!isIntersect) return;

      dispatch(isLoaded());

      await new Promise(resolve => setTimeout(resolve, 1500));

      if (sort === "friends") {
        const { currentOffset } = friendsContentList;
        batch(() => {
          dispatch(friendsContent(currentOffset));
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
      if (sort === "friends") {
        dispatch(increaseFriendsOffset("friendsContentList"));
      }
      dispatch(increaseOffset());
      setIntersect(true);
    }
  };

  useEffect(() => {
    if (sort === "friends") {
      batch(() => {
        dispatch(initializeFriends());
        dispatch(friendList());
        dispatch(friendsContent());
      });
    } else {
      batch(() => {
        dispatch(initializeMainForm());
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
    const curRecommendFriendListNum = recommendFriendList.list[0]
      ? recommendFriendList.list[0].length
      : 0;
    const curFriendsContentListNum = friendsContentList.list.length;

    curContentsNum = curRecommendFriendListNum + curFriendsContentListNum;
    completeContents = [recommendFriendList.list, friendsContentList.list];

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
