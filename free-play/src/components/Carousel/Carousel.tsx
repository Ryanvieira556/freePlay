import { Header } from "../Header/Header";
import * as C from "./styles";
import { CarouselData } from "./CarouselData";
import React, { useState } from "react";
import { Search } from "../Search/Search";

export const Carousel = () => {
  const [state, setState] = useState(0);
  let i = CarouselData[state];
  const { title, img, description } = i;

  const handleArrowLeft = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (state > 0) {
      setState(state - 1);
    }
  };
  const handleArrowRight = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (state < 2) {
      setState(state + 1);
    }
  };

  return (
    <C.Container>
      <C.Banner style={{ backgroundImage: `url(${img})` }}>
        <C.ContainerContent>
          <Header />
          <C.ContainerBannerSpanPC>PC</C.ContainerBannerSpanPC>
          <C.ContainerBannerTitle>{title}</C.ContainerBannerTitle>
          <C.ContainerBannerDesc>{description}</C.ContainerBannerDesc>
          <C.ContainerBannerArrows>
            <C.ContainerBannerArrowsLeft onClick={handleArrowLeft}>
              {"<"}
            </C.ContainerBannerArrowsLeft>
            <C.ContainerBannerArrowsRight onClick={handleArrowRight}>
              {">"}
            </C.ContainerBannerArrowsRight>
          </C.ContainerBannerArrows>
        </C.ContainerContent>
      </C.Banner>
    </C.Container>
  );
};
