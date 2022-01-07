import { useState, useRef, memo, useLayoutEffect } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import SwiperCore, { Navigation } from "swiper";

import { useDispatch } from "react-redux";
import { friendList } from "../modules/mainForm";

const CarouselSlider = ({ children }) => {
  const dispatch = useDispatch();

  SwiperCore.use([Navigation]);

  const [swiper, setSwiper] = useState(null);
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  let isPrev = false;

  const swiperParams = {
    navigation: {
      prevEl: navigationPrevRef.current,
      nextEl: navigationNextRef.current,
    },
    onBeforeInit: swiper => {
      swiper.params.navigation.prevEl = navigationPrevRef.current;
      swiper.params.navigation.nextEl = navigationNextRef.current;
      swiper.navigation.update();
    },
    slidesPerView: 1,
    onSwiper: setSwiper,
  };

  const test = () => {
    if (isPrev) {
      if (swiper.isEnd) isPrev = false;
      return;
    }

    dispatch(friendList());
  };

  useLayoutEffect(() => {
    if (swiper) swiper.slideNext();
  }, [children]);

  return (
    <StyledSwiper {...swiperParams} ref={setSwiper}>
      {children}
      <SlideButton
        onClick={() => {
          isPrev = true;
        }}
        className="prevButton"
        ref={navigationPrevRef}
      >
        <img alt="prevButton" src="./images/icon_prev_button.png" />
      </SlideButton>
      <SlideButton
        onClick={test}
        className="nextButton"
        ref={navigationNextRef}
      >
        <img alt="nextButton" src="./images/icon_next_button.png" />
      </SlideButton>
    </StyledSwiper>
  );
};

const StyledSwiper = styled(Swiper)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background-color: #fff;
`;

const SlideButton = styled.button`
  position: absolute;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 2;
  &.prevButton {
    left: 0;
  }
  &.nextButton {
    right: 0;
  }
  & img {
    width: 50px;
  }
`;

export default CarouselSlider;
