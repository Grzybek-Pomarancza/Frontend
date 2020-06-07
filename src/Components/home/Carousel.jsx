import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";


const items = [
  {
    src:
      "https://www.oto-samochody.pl/wp-content/uploads/2018/05/l20131210145257.jpg",
    altText: "ul. Mickiewicza 1 31-120 Kraków",
    caption: "Salon Mickiewicza",
  },
  {
    src:"https://www.autoguide.com/blog/wp-content/uploads/2012/10/mazda-dealership-going-topless.jpg",
    altText: "ul. Dietla 4 32-998 Kraków",
    caption: "Salon Dietla",
  },
  {
    src:
      "https://libertow.bmw-mcars.pl/www/media/20/img/salon_bmw_libertow_2b.jpg",
    altText: "ul. Krakowka 1 31-546 Kraków",
    caption: "Salon Krakowska",
  },
];

const Example = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} height="550px" width="850px"/>
        <CarouselCaption
          captionText={item.altText}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      className="carousel-home"
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
};

export default Example;
