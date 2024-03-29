import "../Styles/ProfileConfig.css";
import { Link } from "react-router-dom";
import leftArrow from "../assets/Vector.svg";
import { useNavigate } from "react-router-dom";



function ProfileConfig() {

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  return (
    <div id="config-container ">
      <div id="top-gradient"></div>
      <header id="header-container">
        <div id="arrow-left">
          <Link to="/nav/profile">
            <img src={leftArrow} className="arrowConfig" />
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
        <button id="logout" onClick={handleLogout}>Cerrar sesion</button>
      </footer>
    </div>
  );
}

export default ProfileConfig;
