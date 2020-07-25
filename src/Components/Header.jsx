import React from 'react';
import "./Styles/header.css"
const Header = () => {
  return (
    <div>
      <header className="headerContainer">
        <img className="logo" src={require("./assets/images/cameraLogoBlack.webp")} alt="black camera"/>
        <span className="logoName">Momentka</span>
      </header>
    </div>
  );
};

export default Header;