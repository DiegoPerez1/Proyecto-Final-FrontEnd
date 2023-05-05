import "../Styles/Start.css";

function Start() {
  return (
    <main id="container">
      <div id="background">
        <section id="top-container">
          <img id="logo" src="../src/assets/logo.svg" />
          <h3 id="title">Música a medida.</h3>
        </section>

        <section id="bottom-container">
          <div id="btn-container">
            <button id="btn-register">Registrarse Gratis</button>
            <div className="login-with">
              <img  className="icon" src="../src/assets/google-icon.svg" />
              <button id="btn-google">Continuar con Google</button>
            </div>
            <div className="login-with">
              <img className="icon" src="../src/assets/apple-icon.svg" />
              <button id="btn-apple">Continuar con Apple</button>
            </div>
            <button id="btn-login">Iniciar Sesión</button>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Start;
