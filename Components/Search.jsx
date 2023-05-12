import { useState } from "react";
import "../Styles/search.css";
import iconInput from "../src/assets/search-icon-input.svg";


function Search() {
  const [canciones, setCanciones] = useState([]);
  const [input, setInput] = useState("");
  const [cancionesFiltradas, setCancionesFiltradas] = useState([]);

  const onChange = async (event) => {
    setInput(event.target.value);

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

        const filtradas = respuesta.canciones.filter((cancion) =>
          cancion.nombre.toLowerCase().includes(input.toLowerCase())
        );
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
        {cancionesFiltradas.map((item, index) => {
          console.log(item.imagen)
          return (
            <div id="track-container" key={index}>
                <img id="foto" src={`../src/assets/cupido-img/${item.imagen}.png`} alt={`Foto de ${item.imagen}`} />
              <div id="artist-and-name">
                <div id="artist">{item.artista}</div>
                <div id="song-name">{item.nombre}</div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Search;
/* import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/CupidoMusical.css";
import Vector from "../src/assets/Vector.svg";
import like from "../src/assets/green-heart.svg";
import pass from "../src/assets/red-cross.svg";
import Marley from "../src/assets/cupido-img/Marley.png";
import Ozuna from "../src/assets/cupido-img/Ozuna.png";
import Justin from "../src/assets/cupido-img/Justin.png";
import Angeles from "../src/assets/cupido-img/Angeles.png";
import Queen from "../src/assets/cupido-img/Queen.png";
import Yanni from "../src/assets/cupido-img/Yanni.png";
import Kendrick from "../src/assets/cupido-img/Kendrick.png";
import Deadmau5 from "../src/assets/cupido-img/Deadmau5.png";
import Brian from "../src/assets/cupido-img/Brian.png";
import Beegees from "../src/assets/cupido-img/Beegees.png";

function CupidoMusical() {
  const [artistas, setArtistas] = useState([]);
  const [currentArtist, setCurrentArtist] = useState([]);
  const [artistasSelect, setArtistasSelect] = useState([]);

  const [playlistCreated, setPlaylistCreated] = useState(false);

  useEffect(() => {
    const fetchArtistas = async () => {
      const response = await fetch("/api/artistas", { method: "GET" });
      console.log(response);
      const data = await response.json();
      console.log(data);
      setArtistas(data);
      if (data.length > 0) {
        setCurrentArtist(data[0]);
      }
    };
    fetchArtistas();
  }, []);

  useEffect(() => {
    localStorage.setItem("artistasSelect", JSON.stringify(artistasSelect));
  }, [artistasSelect]);

  const handleCreatePlaylist = () => {
    const token = localStorage.getItem("token");

    fetch(`http://localhost:3000/api/cupidoMusical`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
      body: JSON.stringify({ artistas: artistasSelect }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error en la respuesta del servidor");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setPlaylistCreated(true);
      })
      .catch((error) => console.error(error));
  };

  const handleSelectArtista = (nombre) => {
    if (artistasSelect.includes(nombre)) {
      setArtistasSelect(artistasSelect.filter((n) => n !== nombre));
    } else {
      setArtistasSelect([...artistasSelect, nombre]);
    }
  };

  const onClickLike = () => {
    const currentIndex = artistas.indexOf(currentArtist);
    const nextIndex = (currentIndex + 1) % artistas.length;
    setCurrentArtist(artistas[nextIndex]);
    console.log(currentArtist);
  };

  const onClickPass = () => {
    // deseleccionar un artista
  };

  return (
    <div id="container">
      <div id="top-gradient"></div>
      <header id="header">
        <img src={Vector} alt="icono de flecha" />
        <p id="cupido-title">Cupido Musical</p>
      </header>
      <main>
        <img
          id="img-artist"
          src={currentArtist?.imagen}
          alt="imagen de artista"
        />
        <section id="artist-selection">
          <h2>Selecciona tus artistas favoritos</h2>
          <ul>
            <li
              key={currentArtist?.nombre}
              onClick={() => handleSelectArtista(currentArtist?.nombre)}
              className={
                artistasSelect.includes(currentArtist?.nombre) ? "selected" : ""
              }>
              {currentArtist?.nombre}
            </li>
          </ul>
        </section>
        <section id="both-icons">
          <button className="icon-btn" onClick={onClickLike}>
            <img src={like} alt="icono de corazón" />
          </button>
          <button className="icon-btn" onClick={onClickPass}>
            <img src={pass} alt="icono de cruz" />
          </button>
        </section>
      </main>
      <button id="btn-create" onClick={handleCreatePlaylist}>
        Crear Playlist
      </button>
      {playlistCreated && <p>Lista de reproducción creada con éxito.</p>}
    </div>
  );
}

export default CupidoMusical; */