import React from "react";

import logo from "assets/img/logo.png";

import "./Footer.scss";

const Footer = () => {
  return (
    <div className="app-footer-container">
      <img src={logo} alt="logo" />
      <div className="app-footer-container__block-links">
        <ul>
          <li>Features</li>
          <li>Accessories</li>
          <li>Gallery</li>
          <li>Contacts</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
