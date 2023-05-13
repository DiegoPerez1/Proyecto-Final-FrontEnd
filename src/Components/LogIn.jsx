import "../Styles/Login.css";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import leftArrow from "../assets/Vector.svg";

function Login() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [habilitarBoton, setHabilitarBoton] = useState(false);


  const verificarCamposCompletos = () => {
    if (userName !== '' && password !== '') {
      setHabilitarBoton(true);
    } else {
      setHabilitarBoton(false);
    }
    console.log(verificarCamposCompletos)
  };

  const handlepassword = (event) => {
    setPassword(event.target.value);
    setPass(event.target.value)
    verificarCamposCompletos();
  };

  const handleUser = (event) => {
    setUserName(event.target.value);
    setUser(event.target.value)
    verificarCamposCompletos();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };


  const login = async (event) => {
    event.preventDefault();

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      usuario: user,
      contraseña: pass,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    try {
      const response = await fetch(
        "http://localhost:3000/api/login",
        requestOptions
      );

      if (response.ok) {
        const respuesta = await response.json();
        localStorage.setItem("token", respuesta.token);
        /*  alert(respuesta.message); */
        navigate("/nav/home");
      } else {
        const respuesta = await response.json();
        alert(respuesta.error);
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="ContainerLogIn">
      <div id="top-gradient"></div>
      <section className="headerLogIn">
        <Link to="/">
          {" "}
          <img src={leftArrow} alt="" className="arrowLogIn" />
        </Link>
        <p>Iniciar sesion</p>
      </section>
      <br />
      <form className="formSectionLogIn" action="submit" onSubmit={login}>
        <section className="titleSectionLogIn">
          <p>Nombre de usuario</p>
          <input
            className="inputLogIn"
            type="text"
            onChange={
              handleUser
            }
            value={user}
          />
        </section>
        <br />
        <section className="passwordSectionLogin">
          <label htmlFor="">Contraseña:</label>
          <input

            className="inputLogIn"
            type="text"
            onChange={
              handlepassword
            }
            value={pass}
          />
        </section>
        <section className="buttonSectionLogIn">
          <button className={habilitarBoton ? 'activo' : 'inactivo'} type="submit" disabled={!habilitarBoton}>
            Iniciar sesion
          </button>
          <Link to={'/recover-account'}><p className="olvidasteTuContraseña">¿Olvidaste tu contraseña?</p></Link>
        </section>
      </form>
    </div>
  );
}

export default Login;
