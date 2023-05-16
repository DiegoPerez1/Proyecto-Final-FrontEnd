import "../Styles/Signin2.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import leftArrow from "../assets/Vector.svg";
import { useForm } from "react-hook-form";

function Signin2() {
  const [nombre, setNombre] = useState("");
  const [pass, setPass] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [emails, setEmails] = useState("");
  const [habilitarBoton, setHabilitarBoton] = useState(false);
  const { register, formState: { errors }, handleSubmit } = useForm();

  const verificarCamposCompletos = () => {
    if (userName !== "" && password !== "" && emails !== "") {
      setHabilitarBoton(true);
    } else {
      setHabilitarBoton(false);
    }
  };

  const handlepassword = (event) => {
    setPassword(event.target.value);
    setPass(event.target.value);
    verificarCamposCompletos();
  };

  const handleUser = (event) => {
    setUserName(event.target.value);
    setNombre(event.target.value);
    verificarCamposCompletos();
  };

  const handleEmail = (event) => {
    setEmails(event.target.value);
    setEmail(event.target.value);
    verificarCamposCompletos();
  };

  const registro = async (data) => {
    const { email, descripcion, password } = data;

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      usuario: descripcion,
      contraseña: password,
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
      } else {
        const respuesta = await response.json();
        alert(respuesta.error);
      }
    } catch (error) {
      alert("Error!!!  ", error);
    }
  };

  const onSubmit = handleSubmit(registro);

  return (
    <div className="containerSignIn2">
      <div id="top-gradient"></div>
      <section>
        <section>
          <Link to="/signin">
            <img src={leftArrow} alt="" className="arrowSignIn" />
          </Link>
        </section>
        <section className="headerText">
          <p>Crear cuenta</p>
        </section>
      </section>
      <br />
      <section className="titleSectionSignIn">
        <h2>Ingresa email, nombre de usuario y contraseña</h2>
      </section>
      <br />
      <form className="formSectionSignIn" onSubmit={onSubmit}>
        <section className="emailSection">
          <label htmlFor="">Correo electronico:</label>
          <input
            className='inputLogIn'
            type="text"
            {...register('email', { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, })}
            onChange={
              handleEmail
            }
            value={email}
          />
          {
            errors.email?.type === 'required' && (
              <p className="errorTextSingIn">Ingrese un email</p>
            )
          }
          {
            errors.email?.type === 'pattern' && (
              <p className="errorTextSingIn">Ingrese un email valido</p>
            )
          }

        </section>
        <section className="nameSectionSignIn">
          <label htmlFor="">Nombre de usuario:</label>
          <input
            className='inputLogIn'
            type="text"
            {...register('descripcion', { required: true, minLength: 6 })}
            onChange={handleUser}
            value={nombre}
          />
          {
            errors.descripcion?.type === 'required' && (
              <p className="errorTextSingIn">Ingrese un nombre</p>
            )
          }
          {
            errors.descripcion?.type === 'minLength' && (
              <p className="errorTextSingIn">Minimo 6 caracteres</p>
            )
          }
        </section>
        <section className="passwordSectionSignIn">
          <label htmlFor="">Contraaseña:</label>
          <input
            className='inputLogIn'
            type="text"
            {...register('password', { required: true, minLength: 8 })}
            onChange={handlepassword}
            value={pass}
          />
          {
            errors.password?.type === 'required' && (
              <p className="errorTextSingIn">Ingrese una contraseña</p>
            )
          }
          {
            errors.password?.type === 'minLength' && (
              <p className="errorTextSingIn">Minimo 8 caracteres</p>
            )
          }
          <p className='passVerification'>Debera contener al menos 8 caracteres</p>
        </section>
        <section className='checkBoxSignIn'>
          <div className="checkBoxDivSection">
            <input type="checkbox" className="checkSignIn"
              {...register('check', { required: true })} />
            <p>He leido y acepto los <Link to={'/terminos-condiciones'}><a href="">Terminos</a></Link> y <Link to={'/terminos-condiciones'}><a href="">Condiciones</a></Link></p> {" "}
          </div>

          <div>
            {
              errors.check?.type === 'required' && (
                <p className="errorTextSingIn">Acepta los terminos y condiciones</p>
              )
            }
          </div>
        </section>
        <section className="buttonSectionSignIn">
          <button className={habilitarBoton ? 'activo' : 'inactivo'} disabled={!habilitarBoton}>Continuar</button>
        </section>
      </form>
    </div>
  );
}

export default Signin2;
