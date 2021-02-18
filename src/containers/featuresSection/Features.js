import DescriptionItem from "components/DescriptionFeatures/DescriptionItem";
import { data } from "data/Data";
import React from "react";

import "./Features.scss";

const Features = () => {
  return (
    <div className="app-features-container">
      <div className="app-features-container__block-title">
        <h2>Drone Features</h2>
        <p>
          Our drones have a variety of useful features that make them stand out
          in comparison with other products on the market. From 4K camera to GPS
          navigation, each of our drones offers a wide set of benefits as well
          as unique design.
        </p>
      </div>
      <div className="app-features-container__block-features">
        {data.Description.map((el) => (
          <DescriptionItem key={el.id} Description={el} />
        ))}
      </div>
    </div>
  );
};

export default Features;
