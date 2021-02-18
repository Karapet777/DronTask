import React, { useState } from "react";

import Logo from "assets/img/logo.png";

import "./Header.scss";

const Header = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <div className={navbar ? " activeNave" : "app-header-container"}>
      <nav className="app-header-container__nav">
        <div>
          <img
            className="app-header-container__nav__logo"
            src={Logo}
            alt="logo"
          />
        </div>
        <ul>
          <li>Features</li>
          <li>Accessories</li>
          <li>Gallery</li>
          <li>Contacts</li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
