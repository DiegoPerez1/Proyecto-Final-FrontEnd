import { useState } from "react";
import "../Styles/search.css";
import iconInput from "../src/assets/search-icon-input.svg";

function Search() {
  const [canciones, setCanciones] = useState([]);

  const onChange = async (event) => {
    event.preventDefault();

    var myHeaders = new Headers();
    myHeaders.append("Authorization", localStorage.getItem("token"));
    myHeaders.append("Content-Type", "application/json");
    console.log(myHeaders);
    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    try {
      const response = await fetch(
        "http://localhost:3000/api/canciones",
        requestOptions
      );
      if (response.ok) {
        const respuesta = await response.json();
        console.log(respuesta);
        setCanciones(respuesta.canciones);
      } else {
        alert("Ocurrio un error del lado del cliente");
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <header id="container">
        <div id="top-gradient"></div>
        <h2 id="title">Buscador</h2>
        <div id="search-container">
          <img id="icon" src={iconInput} />
          <input
            id="search-input"
            type="text"
            placeholder="¿Que deseas escuchar?"
            onChange={onChange}
          />
        </div>
      </header>
      {canciones.map((item, index) => {
        return <div key={index}>{item.nombre}</div>;
      })}
      {/*<div>{canciones[0].nombre}</div>*/}
    </>
  );
}

export default Search;
