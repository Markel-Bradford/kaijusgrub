import React, { useEffect, useState } from "react";

const Carousel = () => {
  const data = ["freshingredients", "cookiedough", "cookies", "cakelayers", "bdaycake", "bdaycake2", "hungrydoggo"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselInfiniteScroll = () => {
    if (currentIndex === data.length - 1) {
      return setCurrentIndex(0);
    }
    return setCurrentIndex(currentIndex + 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      carouselInfiniteScroll();
    }, 4000);
    return () => clearInterval(interval);
  });

  return (
    <div className="carousel-container">
      {data.map((item, index) => {
        return (
            <img
            className="carousel-item"
            style={{ transform: `translate(-${currentIndex * 100}%)` }}
            key={index}
            src={`/kaijusgrub/images/${item}.jpg`}
            alt={item} />
        );
      })}
    </div>
  );
};

export default Carousel;
