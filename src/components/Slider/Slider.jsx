import React, { useState } from "react";
import { SliderImage } from "../../constants/SliderData.js";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import "./Slider.css";

function Slider() {
  const [current, setCurrent] = useState(0);
  const length = SliderImage.length;
  // console.log(length);

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
    console.log(current);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
    console.log(current);
  };

  if (!Array.isArray(SliderImage) || SliderImage.length <= 0) {
    return null;
  }

  return (
    <section className="gallerySlide" id="slider">
      <h4 className='commonTitle GalleryMainTitle'>Gallery</h4>

      <div className="SliderContainer">

        {SliderImage.map((data, index) => (
          <div
            className={index == current ? "slideImage active" : "slideImage"}
            key={index}
          >
            {index === current && (
              <img src={data.image} alt="Images" className="eachImage" />
            )}
          </div>
        ))}
      </div>

        <div className="arrowsInBox">
          <FaArrowAltCircleLeft className="leftArrow" onClick={prevSlide} />
          <FaArrowAltCircleRight className="rightArrow" onClick={nextSlide} />
        </div>
    </section>
  );
}

export default Slider;
