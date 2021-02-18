import ProductItem from "components/productItem/ProductItem";
import { data } from "data/Data";
import React from "react";

import "./AccessoriesSection.scss";
const AccessoriesSection = () => {
  return (
    <div className="app-accessories-container">
      <div className="app-accessories-container__block">
        <p className="app-accessories-container__block__title">Accessories</p>
        <p className="app-accessories-container__block__info">
          Besides offering top-notch aerial drones, we also provide our clients
          with a wide variety of accessories and components for their drones.
          Here are some of the most popular products available on our website
          for purchase and delivery.
        </p>
        <div className="app-accessories-container__block__product-block">
          {data.productList.map((el) => (
            <ProductItem key={el.id} product={el} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AccessoriesSection;
