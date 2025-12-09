import React from "react";
import "./Header.css";
import mexico from "../../assets/images/logo-mexico.jpeg";
function Header() {
  return (
    <div className="site__wrapper">
      <header className="banner site__section ">
        <img
          src={mexico}
          alt="Magical Mexico Logo"
          className="banner__logo"
        />
      </header>
    </div>
  );
}

export default Header;
