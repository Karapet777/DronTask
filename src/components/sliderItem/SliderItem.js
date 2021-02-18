import React from "react";

import Button from "components/button/Button";

import "./SliderItem.scss";

const SliderItem = ({ slider }) => {
  return (
    <div className="slider-Item">
      <div className="slider-Item__title-block">
        <p className="slider-Item__title-block__title">{slider.title}</p>
        <p className="slider-Item__title-block__info">{slider.info}</p>
      </div>
      <div className="slider-Item__img-block">
        <div>
          <img src={slider.src} alt="DronImg" />
        </div>
        <div>
          <p>
            <span>Max Speed</span>
            {slider.maxSped}
          </p>
          <p>
            <span>Weight</span>
            {slider.weight}
          </p>
          <p>
            <span>Battery</span>
            {slider.battery}
          </p>
          <p>
            <span>Camera</span>
            {slider.camera}
          </p>
          <p>
            <span>Prace</span>
            {slider.price}
          </p>
          <div className="slider-Item__img-block__btns">
            <Button title="Buy now" />
            <Button title="Learn more" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderItem;
