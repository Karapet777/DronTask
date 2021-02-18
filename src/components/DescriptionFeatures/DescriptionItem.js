import React from "react";

import "./DescriptionItem.scss";

const DescriptionItem = ({ Description }) => {
  return (
    <div className="DescriptionItem-container">
      <img
        className="DescriptionItem-container__img"
        src={Description.src}
        alt="icon"
      />
      <p className="DescriptionItem-container__title">{Description.title}</p>
      <p className="DescriptionItem-container__details">{Description.info}</p>
    </div>
  );
};

export default DescriptionItem;
