import "../Styles/Start.css"

function Start() {
  return (
    <div className="container">
      <section className="top-container">
        <img src="../src/assets/logo.svg" />
        <h3>Música a medida.</h3>
      </section>
      <section className="bottom-container">
        <button>Registrarse Gratis</button>
        <button>Continuar con Google</button>
        <button>Continuar con Apple</button>
        <button>Iniciar Sesión</button>
      </section>
    </div>
  )
}


export default Start;