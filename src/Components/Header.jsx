import React from 'react';
import "./Styles/header.css"

const Header = (props) => {
  return (
    <div>
      <header className="headerContainer">
        <div className={props.name}>{props.element}</div>
        <span className="logoContainer">
          <img className="logo" src={require("./assets/images/cameraLogoBlack.webp")} alt="black camera"/>
          <span className="logoName">Momentka</span>
        </span>
      </header>
    </div>
  );
};

export default Header;