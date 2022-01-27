import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import SearchContainer from "../../containers/SearchContainer";
import ContentForm from "../ContentForm";
import client from "../../lib/api/client";

const MakeRoomForm = () => {
  const [test, setTest] = useState([]);
  const [delta, setDelta] = useState(0);
  const [playTrack, setPlayTrack] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(4);

  const pickContentForm = event => {
    let target = event.target;

    while (!target.classList.contains("contentForm")) {
      target = target.parentNode;
    }

    let thumbnail = target.getElementsByClassName("thumbnail")[0];
    setPlayTrack(playTrack.concat(thumbnail.dataset.img));
  };

  const moveSlide = event => {
    const buttonSort = event.target.dataset.sort;

    if (playTrack.length < 5) return;

    if (buttonSort === "prevButton") {
      if (delta === 0) return;

      setCurrentSlide(currentSlide - 1);
      setDelta(delta + 300);
    } else {
      const lastSlide = playTrack.length;
      console.log(currentSlide, lastSlide);
      if (currentSlide === lastSlide) return;

      setCurrentSlide(currentSlide + 1);
      setDelta(delta - 300);
    }
  };

  useEffect(() => {
    const testFunc = () => {
      client.get("http://localhost:3000/data/contentPopular.json").then(res => {
        res.data.message.map(elem => (elem.sort = "makeRoom"));
        setTest(test.concat(res.data.message));
      });
    };
    testFunc();
  }, []);

  return (
    <Container>
      <SearchBarContainer>
        <p className="titleFront">SEARCH</p>
        <SortBox>
          <span className="sort">전체</span>
        </SortBox>
        <SearchContainer sort="makeRoom" />
        <div className="searchIcon" />
      </SearchBarContainer>
      <ContentList>
        {test.map(({ id, title, image_url, currentCategory, sort }, index) => {
          return (
            <ContentForm
              key={index}
              currentCategory={currentCategory}
              title={title}
              image_url={image_url}
              sort={sort}
              pickContentForm={pickContentForm}
            />
          );
        })}
      </ContentList>
      <PlayTrackContainer>
        <PlayTrackList empty={playTrack.length === 0 ? true : false}>
          {playTrack.length === 0 ? (
            "리스트에 담을 영상을 선택하세요"
          ) : (
            <Slider delta={delta}>
              {playTrack.map((image_url, index) => {
                return (
                  <Thumbnail key={index} src={image_url} alt="thumbnail" />
                );
              })}
            </Slider>
          )}
        </PlayTrackList>
        <SlideButton className="prevButton">
          <img
            alt="prevButton"
            src="./images/icon-arrow-left.png"
            data-sort="prevButton"
            onClick={moveSlide}
          />
        </SlideButton>
        <SlideButton className="nextButton">
          <img
            alt="nextButton"
            src="./images/icon-arrow-right.png"
            data-sort="nextButton"
            onClick={moveSlide}
          />
        </SlideButton>
      </PlayTrackContainer>
    </Container>
  );
};
const Container = styled.div`
  margin-bottom: 270px;
`;

const SearchBarContainer = styled.div`
  position: relative;
  margin-bottom: 65px;

  & .titleFront {
    margin-bottom: 15px;
    font-size: 20px;
    font-weight: 600;
    letter-spacing: 1px;
  }
  & .searchIcon {
    position: absolute;
    top: 35px;
    right: 300px;
    width: 45px;
    height: 50px;
    padding-left: 66px;
    border-left: 1.3px solid #d0d0d0;
    background: url(./images/icon_search.png) no-repeat;
    background-size: 45px 45px;
    background-position: center center;
  }
`;

const SortBox = styled.div`
  position: absolute;
  top: 46px;
  left: 40px;
  display: inline-flex;
  align-items: center;
  cursor: pointer;

  & .sort {
    margin-top: 3px;
    font-size: 17px;
    font-weight: 400;
    color: #464646;
  }

  &::after {
    display: block;
    content: "";
    width: 1px;
    height: 28px;
    background-color: #e1e2e3;
    margin: auto 35px;
  }
`;

const ContentList = styled.ul`
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  flex-flow: row wrap;
`;

const PlayTrackContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 320px;
  min-width: 1840px;
  height: 270px;
  padding-top: 30px;
  padding-left: 40px;
  background-color: #fff;
  box-shadow: -10px 0 13px rgba(0, 0, 0, 0.25);
  z-index: 10;
`;

const PlayTrackList = styled.div`
  position: relative;
  display: flex;
  margin: 0 auto;
  width: 1200px;
  height: 160px;
  box-sizing: content-box;
  border: 1px solid #d4d4d4;
  background-color: rgba(202, 201, 201, 0.3);
  ${({ empty }) =>
    empty &&
    css`
      justify-content: center;
      align-items: center;
    `}
  overflow: hidden;
`;

const SlideButton = styled.button`
  position: absolute;
  top: 60px;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 30;

  &.prevButton {
    left: 270px;
  }
  &.nextButton {
    right: 230px;
  }
  & img {
    width: 50px;
    height: 100px;
  }
`;

const Slider = styled.div`
  display: flex;
  transition: transform 1ms ease-out;
  transform: ${({ delta }) => delta && `translateX(${delta}px)`};
`;

const Thumbnail = styled.img`
  width: 300px;
  height: 160px;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
  cursor: pointer;
`;

export default MakeRoomForm;
