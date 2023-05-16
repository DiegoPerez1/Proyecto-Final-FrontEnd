import "../Styles/search.css";
import { useState } from "react";
import iconInput from "../assets/search-icon-input.svg";

function Search() {
  const [canciones, setCanciones] = useState([]);
  const [input, setInput] = useState("");
  const [cancionesFiltradas, setCancionesFiltradas] = useState([]);

  const onChange = async (event) => {
    const inputValue = event.target.value.toLowerCase();
    setInput(inputValue);

    var myHeaders = new Headers();
    myHeaders.append("Authorization", localStorage.getItem("token"));
    myHeaders.append("Content-Type", "application/json");

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
        setCanciones(respuesta.canciones);

        const filtradas = respuesta.canciones.filter((cancion) => {
          const nombre = cancion.nombre.toLowerCase();
          const artista = cancion.artista.toLowerCase();
          return nombre.includes(inputValue) || artista.includes(inputValue);
        });

        setCancionesFiltradas(filtradas);
      } else {
        alert("Ocurrió un error del lado del cliente");
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
          <img id="icon" src={iconInput} alt="Search Icon" />
          <input
            id="search-input"
            type="text"
            placeholder="¿Qué deseas escuchar?"
            onChange={onChange}
          />
        </div>
      </header>

      <div id="music-container">
        <div className="trend-grid">
          {cancionesFiltradas.length > 0 ? (
            cancionesFiltradas.map((item, index) => {
              console.log(item.imagen);
              return (
                <div id="track-container" key={index}>
                  <img
                    id="foto"
                    src={`${"/"}${item.imagen}.png`}
                    alt={`Foto de ${item.imagen}`}
                  />
                  <div id="artist-and-name">
                    <div id="artist">{item.artista}</div>
                    <div id="song-name">{item.nombre}</div>
                  </div>
                </div>
              );
            })
          ) : (
            <div id="no-results">No se encontraron canciones.</div>
          )}
        </div>
      </div>
    </>
  );
}

export default Search;
