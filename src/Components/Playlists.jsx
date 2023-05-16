import "../Styles/Playlist.css";
import leftArrow from "../assets/Vector.svg";
import tresPuntos from "../assets/trespuntos.svg";
import profilePiccPlaylist from "../assets/profile-pic.png";
import addFriend from "../assets/addFriendIcon.svg";
import album from "../assets/albumImg.png";
import candadoOpen from "../assets/candadoOpen.svg";
import share from "../assets/share-icon.svg";
import reloj from "../assets/relojIcon.svg";
import addIcon from "../assets/agregarIcon.svg";
import shuffle from "../assets/aleatorioIcon.svg";
import playButton from "../assets/playButton.svg";
import logoSmall from "../assets/logo-small.svg";
import verify from "../assets/verify.svg";
import copia from "../assets/copia.svg";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import moment from "moment";

function Playlists() {
  const [cancionesPlaylist, setCancionesPlaylist] = useState([]);
  const [duracionTotal, setDuracionTotal] = useState(0);

  useEffect(() => {
    const fetchCanciones = async () => {
      try {
        const playlistId = localStorage.getItem("idPlaylist");
        const response = await fetch(
          `http://localhost:3000/api/playlist/${playlistId}/cancionesCupido`
        );
        if (response.ok) {
          const data = await response.json();
          setCancionesPlaylist(data.canciones);

          const duracionTotalEnSegundos = data.canciones.reduce(
            (total, cancion) => {
              if (cancion.duracion) {
                const duracion = moment.duration(cancion.duracion);
                return total + duracion.asSeconds();
              }
              return total;
            },
            0
          );

          setDuracionTotal(duracionTotalEnSegundos);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchCanciones();
  }, []);

  const formatDuracion = (duracionEnSegundos) => {
    const horas = Math.floor(duracionEnSegundos / 3600);
    const minutos = Math.floor((duracionEnSegundos % 3600) / 60);
    const segundos = Math.floor(duracionEnSegundos % 60);

    const duracionFormateada = `${horas.toString().padStart(2, "0")}:${minutos
      .toString()
      .padStart(2, "0")}:${segundos.toString().padStart(2, "0")}`;

    return duracionFormateada;
  };

  return (
    <div className="contenedorPlayList">
      <div id="top-gradient"></div>
      <header className="headerPlayList">
        <Link to="/nav/home">
          <img id="back-arrow" src={leftArrow} alt="Back" />
        </Link>
        <div id="titulo-playlist">
          <p>Generada del Cupido Musical</p>
          {/*    <p>Playlist Generada</p> */}
        </div>
        <img src={tresPuntos} alt="Options" id="titulo-opciones" />
      </header>
      {cancionesPlaylist.map((cancion) => (
        <section className="albumPlaylistSection" key={cancion.id}>
          <img
            src={`${"/"}${cancion.imagen}${".png"}`}
            alt="Album"
            id="imagenes-playlist"
          />
          <img
            src={`${"/"}${cancion.imagen}${".png"}`}
            alt="Album"
            id="imagenes-playlist"
          />
          <img
            src={`${"/"}${cancion.imagen}${".png"}`}
            alt="Album"
            id="imagenes-playlist"
          />
          <img
            src={`${"/"}${cancion.imagen}${".png"}`}
            alt="Album"
            id="imagenes-playlist"
          />
        </section>
      ))}
      <section id="logos-duracion">
        <img src={logoSmall} alt="Logo" />
        <img src={verify} alt="Verify" />
        <img src={share} alt="Share" />
        <div id="timeList">
          <p>{formatDuracion(duracionTotal)}</p>
          <img src={reloj} alt="Clock" />
        </div>
      </section>

      <section id="icons-playlist">
        <img src={copia} alt="Copy" />
        <p>Crear Copia</p>
        <div id="play-shuffle">
          <img src={shuffle} alt="Shuffle" className="iconsPlaylist" />
          <img src={playButton} alt="Play" className="playButton" />
        </div>
      </section>
      <section className="songsPlaylistSection">
        <ul className="listSongsPlaylist">
          {cancionesPlaylist.map((cancion) => (
            <li key={cancion.id}>
              <img
                src={`${"/"}${cancion.imagen}${".png"}`}
                alt="Song"
                className="playlistSongsIcons"
              />
              <div id="nombre-artista-playlist">
                <h5 id="nombre-cancion">{cancion.nombre}</h5>
                <p id="artista-cancion">{cancion.artista}</p>
              </div>
              <img src={tresPuntos} alt="Details" id="detalles-cancion" />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default Playlists;
