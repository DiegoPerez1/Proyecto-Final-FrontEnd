import { useState, useEffect } from "react";
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
  const [artistas, setArtistas] = useState([]);       //almacena la lista de artistas
  const [currentArtist, setCurrentArtist] = useState([0]);  //artista actual que se muestra en pantalla
  const [artistasSelect, setArtistasSelect] = useState([]);  //almacena artistas seleccionados por el usuario en una lista
  const [playlistCreated, setPlaylistCreated] = useState(false);
  const [token, setToken] = useState("");

  useEffect(() => {
    // se realiza una solicitud GET a /api/artistas para obtener una lista de artistas desde el servidor.
    // Luego, se actualiza el estado artistas con los datos obtenidos y se establece el primer artista como currentArtist.
    const fetchArtistas = async () => {
      const response = await fetch("/api/artistas", { method: "GET" });
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setArtistas(data);
        if (data.length > 0) {
          setCurrentArtist(data[0]);
        }
      }
    };
    fetchArtistas();
  }, []);
  const onClickLike = () => {
    // Actualiza el estado currentArtist para mostrar el siguiente artista de la lista 
    // y agrega el artista actual a la lista de artistasSelect.
    const currentIndex = artistas.indexOf(currentArtist);
    const nextIndex = (currentIndex + 1) % artistas.length;
    const nextArtist = artistas[nextIndex];
    setCurrentArtist(nextArtist);
    setArtistasSelect([...artistasSelect, nextArtist]);
  };
  
  const onClickPass = () => {
    // deseleccionar un artista
  };

  const onClickCrearPlaylist = async () => {
    if (artistasSelect.length < 2) {
      alert("Debe seleccionar al menos dos artistas para crear la lista de reproducción");
      return;
    }
  
    try {
      const response = await fetch(`http://localhost:3000/api/cupidoMusical`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`,
        },
        body: JSON.stringify({ artistas: artistasSelect }),
      });
      if (!response.ok) {
        throw new Error("Error en la respuesta del servidor");
      }
      const data = await response.json();
      console.log(data);
      setPlaylistCreated(true);
    } catch (error) {
      console.error(error);
    }
  };
  
    
    return (
      <div id="container">
      <div id="top-gradient"></div>
      <header id="header">
        <img src={Vector} alt="icono de flecha" />
        <p id="cupido-title">Cupido Musical</p>
      </header>
      <main>
      <img id="img-artist" src={`../src/assets/cupido-img/${currentArtist?.imagen}.png`} />
      <p id="nombre-artista">{currentArtist?.nombre}</p>
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
