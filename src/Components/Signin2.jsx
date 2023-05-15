import "../Styles/Signin2.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import leftArrow from "../assets/Vector.svg";

function Signin2() {
  const [nombre, setNombre] = useState("");
  const [pass, setPass] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [emails, setEmails] = useState('');
  const [habilitarBoton, setHabilitarBoton] = useState(false);


  const verificarCamposCompletos = () => {
    if (userName !== '' && password !== '' && emails !== '') {
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
    setNombre(event.target.value)
    verificarCamposCompletos();
  };

  const handleEmail = (event) => {
    setEmails(event.target.value);
    setEmail(event.target.value)
    verificarCamposCompletos();
  };
  const registro = async (event) => {
    event.preventDefault();






    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      usuario: nombre,
      contraseña: pass,
      email: email,
    });

    const requestOptions = {
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
        navigate("/nav/home");
        /* alert(
          "El usuario ha sido registrado. Vuelva a la página principal para ingresar y acceder al menú"
        );*/
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
      <div id="top-gradient"></div>
      <section >
        <section>
          <Link to='/signin'><img src={leftArrow} alt="" className='arrowSignIn' /></Link>
        </section>
        <section className='headerText'>
          <p>Crear cuenta</p>
        </section>
      </section>
      <br />
      <section className="titleSectionSignIn">
        <h2>Ingresa email, nombre de usuario y contraseña</h2>
      </section>
      <br />
      <form className="formSectionSignIn" action="submit" onSubmit={registro}>
        <section className="emailSection">
          <label htmlFor="">Correo electronico:</label>
          <input
            className='inputLogIn'
            type="text"
            onChange={
              handleEmail
            }
            value={email}
          />
          <p>Deberias poder confirmarlo luego</p>
        </section>
        <section className="nameSectionSignIn">
          <label htmlFor="">Nombre de usuario:</label>
          <input
            className='inputLogIn'
            type="text"
            onChange={handleUser}
            value={nombre}
          />
        </section>
        <section className="passwordSectionSignIn">
          <label htmlFor="">Contraaseña:</label>
          <input
            className='inputLogIn'
            type="text"
            onChange={handlepassword}
            value={pass}
          />
          <p className='passVerification'>Debera contener al menos 8 caracteres</p>
        </section>
        <section className='checkBoxSignIn'>
          <input type="checkbox" className="checkSignIn" />{" "}
          <p><p>He leido y acepto los <a href="">Terminos</a> y <a href="">Condiciones</a> </p></p>
        </section>
        <section className="buttonSectionSignIn">
          <button className={habilitarBoton ? 'activo' : 'inactivo'} disabled={!habilitarBoton}>Continuar</button>
        </section>
      </form>
    </div>
  );
}

export default Signin2;
