import React from "react";
import "../Styles/ProfileConfig.css";
import { Link } from "react-router-dom";
import leftArrow from "../src/assets/Vector.svg";
import line from "../src/assets/largedivider.svg";
function ProfileConfig() {
  return (
    <div id="config-container ">
      <div id="top-gradient"></div>
      <header id="header-container">
        <div id="arrow-left">
          <Link to="/nav/profile">
            <img src={leftArrow} alt="" className="arrowConfig" />
          </Link>
        </div>
        <div className="config-title">
          <h4>Configuracion</h4>
        </div>
      </header>
      <main id="main-container">
        <button id="btn-1">Editar apariencia</button>
        <button id="btn-2">Editar perfil</button>
      </main>
      <footer id="footer-container">
        <button id="version">Version: V1.25.03</button>
        <div id="line-config"></div>
        <button id="logout">Cerrar sesion</button>
      </footer>
    </div>
  );
}

export default ProfileConfig;
