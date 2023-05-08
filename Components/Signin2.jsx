import { Link } from "react-router-dom";
import leftArrow from "../src/assets/Vector.svg";
import "../Styles/Signin2.css";
import { useState } from "react";

function Signin2() {
  const [nombre, setNombre] = useState("");
  const [pass, setPass] = useState("");
  const [email, setEmail] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      usuario: nombre,
      contraseña: pass,
      email: email,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    try {
      const response = await fetch(
        "http://localhost:3000/api/registro",
        requestOptions
      );

      if (response.ok) {
        const respuesta = await response.json();
        alert(
          "El usuario ha sido registrado. Vuelva a la página principal para ingresar y acceder al menú"
        );
      } else {
        const respuesta = await response.json();
        alert(respuesta.error);
      }
    } catch (error) {
      alert("Error!!!  ", error);
    }
  };
  return (
    <div className="containerSignIn">
      <section className="header">
        <Link to="/signin">
          {" "}
          <img src={leftArrow} alt="" className="arrow" />
        </Link>
        <p>Crear cuenta</p>
      </section>
      <br />

      <section className="titleSectionSignIn">
        <h2>Ingresa email, nombre de usuario y contraseña</h2>
      </section>
      <br />
      <form className="formSectionSignIn" action="submit" onSubmit={onSubmit}>
        <section className="emailSection">
          <label htmlFor="">Correo electronico:</label>
          <input
            className="input"
            type="text"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
          />{" "}
          <p>Deberias poder confirmarlo luego</p>
        </section>
        <section className="nameSectionSignIn">
          <label htmlFor="">Nombre de usuario:</label>
          <input
            className="input"
            type="text"
            onChange={(e) => {
              setNombre(e.target.value);
            }}
            value={nombre}
          />
        </section>
        <section className="passwordSectionSignIn">
          <label htmlFor="">Contraaseña:</label>
          <input
            className="input"
            type="text"
            onChange={(e) => {
              setPass(e.target.value);
            }}
            value={pass}
          />
          <p>Debera contener al menos 8 caracteres</p>
        </section>
        <section className="checkBox">
          <input type="checkbox" className="checkSignIn" />{" "}
          <p>He leido y acepto los Terminos y Condiciones</p>
        </section>
        <section className="buttonSectionSignIn">
          <button className="submit">Continuar</button>
        </section>
      </form>
    </div>
  );
}

export default Signin2;
