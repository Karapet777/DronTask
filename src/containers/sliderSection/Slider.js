import SliderItem from "components/sliderItem/SliderItem";
import { data } from "data/Data";
import React from "react";
import Carousel from "react-bootstrap/Carousel";

import "./Slider.scss";
const Slider = () => {
  return (
    <div className="app-slider-container">
      <Carousel>
        {data.SliderData.map((el, index) => (
          <Carousel.Item key={el.id}>
            <div className="app-slider-container__block">
              <SliderItem key={el.id} slider={el} />
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Slider;
