import "../Styles/Start.css";
import { Link } from 'react-router-dom';
import logo from "../assets/logo.svg"
import appleIcon from "../assets/apple-icon.svg"
import googleIcon from "../assets/google-icon.svg"


function Start() {
  return (
    <main id="container">
      <div id="background">
        <section id="top-container">
          <img id="logo" src={logo} />
          <h3 id="title-start">Música a medida.</h3>  
        </section>

        <section id="bottom-container">
          <div id="btn-container">
            <Link to="/signin "> <button id="btn-register">Registrarse Gratis</button></Link>
            <div className="login-with">
              <img className="icon" src={appleIcon} />
              <button id="btn-google">Continuar con Google</button>
            </div>
            <div className="login-with">
              <img className="icon" src={googleIcon} />
              <button id="btn-apple">Continuar con Apple</button>
            </div>
            <Link to="/login"><button id="btn-login">Iniciar Sesión</button></Link>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Start;
