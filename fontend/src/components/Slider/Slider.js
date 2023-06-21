import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import classNames from "classnames/bind";
import styles from "./Slider.module.scss"
import { imageData } from "./imageData";
const cx = classNames.bind(styles)

const renderSlides = imageData.map((image) => (
  <div key={image.label}>
    <img src={image.image} alt={image.alt} />
    {/* <p className="legend">{image.label}</p> */}
  </div>
));

export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState();
  function handleChange(index) {
    setCurrentIndex(index);
  }
  return (
      <Carousel
        showThumbs={false} 
        showStatus={false}
        showArrows={true}
        autoPlay={true}
        infiniteLoop={true}
        selectedItem={imageData[currentIndex]}
        onChange={handleChange}
        className={cx('carousel-container')}
      >
        {renderSlides}
      </Carousel>
  );
}