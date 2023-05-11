import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/CupidoMusical.css";
import Vector from "../src/assets/Vector.svg";
import like from "../src/assets/green-heart.svg";
import pass from "../src/assets/red-cross.svg";
import marley from "../src/assets/cupido-img/marley.png";

function CupidoMusical() {
  const [artistas, setArtistas] = useState([]);
  const [currentArtist, setCurrentArtist] = useState([]);
  const [artistasSelect, setArtistasSelect] = useState([]);
  const navigate = useNavigate();


  useEffect(() => {
    const fetchArtistas = async () => {
      const response = await fetch("/api/artistas", {method:'GET'});
      console.log(response)
      const data = await response.json();
      console.log(data)
      setArtistas(data);
      if(data.length > 0) {
        setCurrentArtist(data[0])
      }
    };
    fetchArtistas();
  }, []);

  const handleSelectArtista = (nombre) => {
    if (artistasSelect.includes(nombre)) {
      setArtistasSelect(artistasSelect.filter((n) => n !== nombre));
    } else {
      setArtistasSelect([...artistasSelect, nombre]);
    }
  };

  const onClickLike = () => {
    if (artistasSelect.length < 2) {
      alert(
        "Debe seleccionar al menos dos artistas para empezar a crear la lista de reproducción"
      );
    } else {
      //  seleccionar un artista
    }
  };

  const onClickPass = () => {
    // deseleccionar un artista
  };

  const onClickCrearPlaylist = async () => {
    if (artistasSelect.length < 2) {
      alert(
        "Debe seleccionar al menos dos artistas para crear la lista de reproducción"
      );
      return;
    }
    const response = await fetch(`/api/cupidoMusical/9`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ artistas: artistasSelect }),
    });
    const data = await response.json();
    alert(data.message);
    navigate("/");
  };

  return (
    <div id="container">
      <div id="top-gradient"></div>
      <header id="header">
        <img src={Vector} alt="icono de flecha" />
        <p id="cupido-title">Cupido Musical</p>
      </header>
      <main>
        <img id="img-artist" src={marley} alt="imagen de artista" />
        <section id="artist-selection">
          <h2>Selecciona tus artistas favoritos</h2>
          <ul>
          <li
                key={currentArtist.nombre}
                onClick={() => handleSelectArtista(currentArtist.nombre)}
                className={
                  artistasSelect.includes(currentArtist.nombre) ? "selected" : ""
                }>
                {currentArtist.nombre}
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
      <button id="btn-create" onClick={onClickCrearPlaylist}>
        Crear Playlist
      </button>
    </div>
  );
}

export default CupidoMusical;
