import React from "react";

import "./ProductItem.scss";
const ProductItem = ({ product }) => {
  return (
    <div className="product-block">
      <img src={product.src} alt="product" />
      <div>
        <p className="product-block__name">{product.name}</p>
        <p className="product-block__price">{product.prace}</p>
      </div>
    </div>
  );
};

export default ProductItem;
