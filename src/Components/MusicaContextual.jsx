import "../Styles/MusicaContextual.css";
import React, { useEffect, useState } from "react";
import vector from "../assets/Vector.svg";
import { Link } from "react-router-dom";

function MusicaContextual() {
  const [actividad, setActividad] = useState("");
  const [generoSeleccionado, setGeneroSeleccionado] = useState([]);

  const handleActividadChange = (event) => {
    setActividad(event.target.value);
  };

  const handleGeneroClick = (genero) => {
    setGeneroSeleccionado(genero);
  };
  

  return (
    <div id="container">
      <div id="top-gradient"></div>
      <header id="header-contextual">
      <Link to="/nav/home"><img src={vector} id="back-contextual" /></Link>
        <p id="contextual-title">Musica Contextual</p>
      </header>
      <div id="inputs-container">
        <div className="label-input">
          <label htmlFor="actividad" id="label-actividad">
            ¿Cuál es la ocasión?
          </label>
          <select
            id="actividad"
            name="actividad"
            onChange={handleActividadChange}
          >
            <option value="" disabled defaultValue>
              Actividad
            </option>
            <option value="Ejercicio Físico">Ejercicio Fisico</option>
            <option value="Limpieza">Limpieza</option>
            <option value="Celebracion">Celebracion</option>
            <option value="Dormir">Dormir</option>
            <option value="Meditar">Meditar</option>
            <option value="Social">Social</option>
            <option value="Estudiar">Estudiar</option>
            <option value="Relajacion">Relajacion</option>
            <option value="Viajando">Viajando</option>
          </select>
        </div>

        <div className="label-input">
          <label htmlFor="estado" id="label-estado">
            ¿Cómo te sientes?
          </label>
          <select id="estado" name="estado">
          <option value="" disabled defaultValue>
              Estado de Animo
            </option>
            <option value="Feliz">Feliz</option>
            <option value="Triste">Triste</option>
            <option value="Enojado">Enojado</option>
          </select>
        </div>
        <div className="label-input">
          <label htmlFor="clima" id="label-clima">
            ¿Cómo esta el clima?
          </label>
          <select id="clima" name="clima">
          <option value="" disabled defaultValue>
              Clima
            </option>
            <option value="Calor">Calor</option>
            <option value="Frio">Frio</option>
            <option value="Lluvioso">Lluvioso</option>
            <option value="Soleado">Soleado</option>
          </select>
        </div>
      </div>

      <div id="contenedorGeneros">
        <p id="titulo-selectGeneros">Selecciona hasta 3 géneros:</p>
        <div className="generos">
          <button
            className={`genero-btn ${
              generoSeleccionado === "Rock" ? "seleccionado" : ""
            }`}
            onClick={() => handleGeneroClick("Rock")}
          >
            Rock
          </button>
          <button
            className={`genero-btn ${
              generoSeleccionado === "Country" ? "seleccionado" : ""
            }`}
            onClick={() => handleGeneroClick("Country")}
          >
            Country
          </button>
          <button
            className={`genero-btn ${
              generoSeleccionado === "Soul" ? "seleccionado" : ""
            }`}
            onClick={() => handleGeneroClick("Soul")}
          >
            Soul
          </button>
          <button
            className={`genero-btn ${
              generoSeleccionado === "Jazz" ? "seleccionado" : ""
            }`}
            onClick={() => handleGeneroClick("Jazz")}
          >
            Jazz
          </button>
          <button
            className={`genero-btn ${
              generoSeleccionado === "Blues" ? "seleccionado" : ""
            }`}
            onClick={() => handleGeneroClick("Blues")}
          >
            Blues
          </button>
          <button
            className={`genero-btn ${
              generoSeleccionado === "Hip-Hop" ? "seleccionado" : ""
            }`}
            onClick={() => handleGeneroClick("Hip-Hop")}
          >
            Hip-Hop
          </button>
          <button
            className={`genero-btn ${
              generoSeleccionado === "Pop" ? "seleccionado" : ""
            }`}
            onClick={() => handleGeneroClick("Pop")}
          >
            Pop
          </button>
          <button
            className={`genero-btn ${
              generoSeleccionado === "Reggae" ? "seleccionado" : ""
            }`}
            onClick={() => handleGeneroClick("Reggae")}
          >
            Reggae
          </button>
          <button
            className={`genero-btn ${
              generoSeleccionado === "Folk" ? "seleccionado" : ""
            }`}
            onClick={() => handleGeneroClick("Folk")}
          >
            Folk
          </button>
          <button
            className={`genero-btn ${
              generoSeleccionado === "R&B" ? "seleccionado" : ""
            }`}
            onClick={() => handleGeneroClick("R&B")}
          >
            R&B
          </button>
          <button
            className={`genero-btn ${
              generoSeleccionado === "Clasico" ? "seleccionado" : ""
            }`}
            onClick={() => handleGeneroClick("Clasico")}
          >
            Clasico
          </button>
          <button
            className={`genero-btn ${
              generoSeleccionado === "Alternativo" ? "seleccionado" : ""
            }`}
            onClick={() => handleGeneroClick("Alternativo")}
          >
            Alternativo
          </button>
          <button
            className={`genero-btn ${
              generoSeleccionado === "Ambiente" ? "seleccionado" : ""
            }`}
            onClick={() => handleGeneroClick("Ambiente")}
          >
            Ambiente
          </button>
          <button
            className={`genero-btn ${
              generoSeleccionado === "EDM" ? "seleccionado" : ""
            }`}
            onClick={() => handleGeneroClick("EDM")}
          >
            EDM
          </button>
          <button
            className={`genero-btn ${
              generoSeleccionado === "Electronica" ? "seleccionado" : ""
            }`}
            onClick={() => handleGeneroClick("Electronica")}
          >
            Electronica
          </button>
          <button
            className={`genero-btn ${
              generoSeleccionado === "Disco" ? "seleccionado" : ""
            }`}
            onClick={() => handleGeneroClick("Disco")}
          >
            Disco
          </button>
          <button
            className={`genero-btn ${
              generoSeleccionado === "New Age" ? "seleccionado" : ""
            }`}
            onClick={() => handleGeneroClick("New Age")}
          >
            New Age
          </button>
          <button
            className={`genero-btn ${
              generoSeleccionado === "Punk" ? "seleccionado" : ""
            }`}
            onClick={() => handleGeneroClick("Punk")}
          >
            Punk
          </button>
        </div>
      </div>
      <button id="crear-btn">
        Crear Playlist
      </button>
    </div>
  );
}

export default MusicaContextual;