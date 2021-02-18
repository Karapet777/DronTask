import React from "react";
import SendIcon from "assets/icon/sendIcon";

import "./FollowSection.scss";

const FollowSection = () => {
  return (
    <div className="app-follow-section">
      <div className="app-follow-section__block">
        <SendIcon />
        <p className="app-follow-section__block__text">
          SIGN UP TO KEEP UP TO DATE WITH ALL OF OUR LATEST OFFERS & PRODUCTS
        </p>
        <div className="app-follow-section__block__Form">
          <input
            className="app-follow-section__block__input"
            type="text"
            placeholder="email"
          />
          <button className="app-follow-section__block__Form__btn">
            &#62;
          </button>
        </div>
      </div>
    </div>
  );
};

export default FollowSection;
