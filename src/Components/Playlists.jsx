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

function Playlists() {
  const [cancionesPlaylist, setCancionesPlaylist] = useState([]);
   
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
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchCanciones();
  }, []);

  return (
    <div className="contenedorPlayList">
      <div id="top-gradient"></div>
      <header className="headerPlayList">
      <Link to='/nav/home'><img id="back-arrow" src={leftArrow}/></Link>
        <div id="titulo-playlist">
          <p>Generada del Cupido Musical</p>
          <p>Playlist Generada</p>
        </div>
        <img src={tresPuntos} id="titulo-opciones" />
      </header>
      {cancionesPlaylist.map((cancion) => (
      <section className="albumPlaylistSection">
        <img src={`${"/"}${cancion.imagen}${".png"}`} id="imagenes-playlist"/>
        <img src={`${"/"}${cancion.imagen}${".png"}`} id="imagenes-playlist"/>
        <img src={`${"/"}${cancion.imagen}${".png"}`} id="imagenes-playlist"/>
        <img src={`${"/"}${cancion.imagen}${".png"}`} id="imagenes-playlist"/>
      </section>
  ))}
      <section id="logos-duracion">
        <img src={logoSmall} />
        <img src={verify} />
        <img src={share} />
        <div id="timeList">
          <p>00:00</p>
          <img src={reloj} />
        </div>
      </section>

      <section id="icons-playlist">
        <img src={copia} />
        <p>Crear Copia</p>
        <div id="play-shuffle">
          <img src={shuffle} alt="" className="iconsPlaylist" />
          <img src={playButton} alt="" className="playButton" />
        </div>
      </section>
      <section className="songsPlaylistSection">
        <ul className="listSongsPlaylist">
          {cancionesPlaylist.map((cancion) => (
            <li key={cancion.id}>
              <img
                src={`${"/"}${cancion.imagen}${".png"}`}
                className="playlistSongsIcons"
              />
              <div id="nombre-artista-playlist">
                <h5 id="nombre-cancion">{cancion.nombre}</h5>
                <p id="artista-cancion">{cancion.artista}</p>
              </div>
              <img src={tresPuntos} id="detalles-cancion" />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default Playlists;
