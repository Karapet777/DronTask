import React from "react";
import Carousel from "react-bootstrap/Carousel";

import img1 from "assets/img/slid1.jpg";
import img2 from "assets/img/slid2.jpg";
import img3 from "assets/img/slid3.jpg";
import img4 from "assets/img/slid4.jpg";

import "./Gallery.scss";
const Gallery = () => {
  return (
    <div className="app-gallery-container">
      <div className="app-gallery-container__block-text">
        <h2>Gallery</h2>
        <p>
          If you are still in doubt whether you need to purchase a drone or not,
          here are some photos to help you make a decision. All of our drone
          photos are done in a safe manner that complies with all FAA commercial
          drone regulations.
        </p>
      </div>
      <div className="app-gallery-container__block-slider">
        <Carousel>
          <Carousel.Item>
            <img src={img1} alt="product" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={img2} alt="product" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={img3} alt="product" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={img4} alt="product" />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default Gallery;
