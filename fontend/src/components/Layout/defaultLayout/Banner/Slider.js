import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import classNames from "classnames/bind";

import styles from "./Slider.module.scss"
const cx = classNames.bind(styles)

const imageData = [
  {
    label: "Image 1",
    alt: "image1",
    url:
   " https://craftypixels.com/placeholder-image/1150x500/53bd4e/green&text=test"  
},
  {
    label: "Image 2",
    alt: "image2",
    url:
      "https://craftypixels.com/placeholder-image/1150x500/d0e655/green&text=test"
  },
  {
    label: "Image 3",
    alt: "image3",
    url: "https://craftypixels.com/placeholder-image/1150x500/cc3b5f/green&text=test"
  },
  {
    label: "Image 4",
    alt: "image4",
    url:
      "https://craftypixels.com/placeholder-image/1150x500/29bd00/fff&text=Woohoo!"
  }
];

const renderSlides = imageData.map((image) => (
  <div key={image.alt}>
    <img src={image.url} alt={image.alt} />
    {/* <p className="legend">{image.label}</p> */}
  </div>
));

export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState();
  function handleChange(index) {
    setCurrentIndex(index);
  }
  return (
    <div className={cx('App')}>
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
    </div>
  );
}