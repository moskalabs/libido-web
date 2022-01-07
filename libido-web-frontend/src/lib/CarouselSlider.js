import { useState, useRef, memo } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";

import SwiperCore, { Navigation } from "swiper";

SwiperCore.use([Navigation]);

const CarouselSlider = ({ children }) => {
  const [swiper, setSwiper] = useState(null);
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

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
    onSlideChange: event => console.log(event.target),
  };

  return (
    <StyledSwiper {...swiperParams} ref={setSwiper}>
      {children}
      <SlideButton className="prevButton" ref={navigationPrevRef}>
        <img alt="prevButton" src="./images/icon_prev_button.png" />
      </SlideButton>
      <SlideButton className="nextButton" ref={navigationNextRef}>
        <img alt="nextButton" src="./images/icon_next_button.png" />
      </SlideButton>
    </StyledSwiper>
  );
};

export const Slide = ({ children }) => {
  return <SwiperSlide>{children}</SwiperSlide>;
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

export default memo(CarouselSlider);
