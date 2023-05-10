import { Link } from "react-router-dom";
import leftArrow from "../src/assets/Vector.svg";
import "../Styles/Login.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

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
            onChange={(e) => {
              setUser(e.target.value);
            }}
            value={user}
          />
        </section>
        <br />
        <section className="passwordSectionLogin">
          <label htmlFor="">Contraseña:</label>
          <input
            className="inputLogIn"
            type="text"
            onChange={(e) => {
              setPass(e.target.value);
            }}
            value={pass}
          />
        </section>
        <section className="buttonSectionLogIn">
          <button className="buttonLogIn" type="submit">
            Iniciar sesion
          </button>
        </section>
      </form>
    </div>
  );
}

export default Login;
