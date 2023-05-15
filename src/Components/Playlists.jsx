import "../Styles/Playlist.css";
import leftArrow from "../assets/Vector.svg";
import tresPuntos from "../assets/trespuntos.svg";
import profilePiccPlaylist from "../assets/profile-pic.png";
import addFriend from "../assets/addFriendIcon.svg";
import album from "../assets/albumImg.png";
import candadoOpen from "../assets/candadoOpen.svg";
import share from "../assets/compartirIcon.svg";
import reloj from "../assets/relojIcon.svg";
import addIcon from "../assets/agregarIcon.svg";
import shuffle from "../assets/aleatorioIcon.svg";
import playButton from "../assets/playButton.svg";
import { useEffect, useState } from "react";

function Playlists() {
  const [cancionesPlaylist, setCancionesPlaylist] = useState([]);
  useEffect(() => {
    const fetchCanciones = async () => {
      try {
        const playlistId = localStorage.getItem("idPlaylist");
        const response = await fetch(
          `http://localhost:3000/api/playlist/${playlistId}/canciones`
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
      <header className="headerPlayList">
        <section>
          <img src={leftArrow} alt="" />{" "}
        </section>
        <section>nombreDeLaPlayulist </section>
        <section>
          <img src={tresPuntos} alt="" />
        </section>
      </header>
      <section className="infoUserSection">
        <div className="userInfo">
          <img src={profilePiccPlaylist} alt="" /> <p>mara_pg</p>
        </div>
        <div>
          <img src={addFriend} alt="" className="iconsPlaylist" />
        </div>
      </section>
      <section className="albumPlaylistSection">
        <img src={album} alt="" />
      </section>
      <section className="albumOptionsSection">
        <section className="buttonAlbumSection">
          <div>
            <button className="buttonPlaylist">Mejorar playlist</button>
          </div>
          <div>
            <img src={candadoOpen} alt="" className="iconsPlaylist" />
          </div>
          <div>
            <img src={share} alt="" className="iconsPlaylist" />
          </div>
        </section>
        <section className="timePlaylistSection">
          <div>
            <p>00:00</p>
          </div>
          <div>
            <img src={reloj} alt="" className="iconsPlaylist" />
          </div>
        </section>
      </section>
      <section className="addSongAlbumSection">
        <section className="addSongSection">
          <div>
            <img src={addIcon} alt="" className="iconsPlaylist" />
          </div>
          <div>
            <p>Añadir cancion</p>
          </div>
        </section>
        <section className="playPlaylistSection">
          <div>
            <img src={shuffle} alt="" className="iconsPlaylist" />
          </div>
          <div>
            <img src={playButton} alt="" className="playButton" />
          </div>
        </section>
      </section>
      <section className="songsPlaylistSection">
        {cancionesPlaylist.map((cancion) => (
          <section className="listSongsPlaylist" key={cancion.id}>
            <div>
              <img src={album} alt="" className="playlistSongsIcons" />
            </div>
            <div>
              <h5>{cancion.nombre}</h5>
              <p>{cancion.artista}</p>
            </div>
            <div className="songOptionsIcon">
              <img src={tresPuntos} alt="" />
            </div>
          </section>
        ))}
        <section className="listSongsPlaylist">
          <div>
            <img src={album} alt="" className="playlistSongsIcons" />
          </div>
          <div>
            <h5>Nombre cancion</h5>
            <p>Nombre artista</p>
          </div>
          <div className="songOptionsIcon">
            <img src={tresPuntos} alt="" />
          </div>
        </section>
        <section className="listSongsPlaylist">
          <div>
            <img src={album} alt="" className="playlistSongsIcons" />
          </div>
          <div>
            <h5>Nombre cancion</h5>
            <p>Nombre artista</p>
          </div>
          <div className="songOptionsIcon">
            <img src={tresPuntos} alt="" />
          </div>
        </section>
        <section className="listSongsPlaylist">
          <div>
            <img src={album} alt="" className="playlistSongsIcons" />
          </div>
          <div>
            <h5>Nombre cancion</h5>
            <p>Nombre artista</p>
          </div>
          <div className="songOptionsIcon">
            <img src={tresPuntos} alt="" />
          </div>
        </section>
        <section className="listSongsPlaylist">
          <div>
            <img src={album} alt="" className="playlistSongsIcons" />
          </div>
          <div>
            <h5>Nombre cancion</h5>
            <p>Nombre artista</p>
          </div>
          <div className="songOptionsIcon">
            <img src={tresPuntos} alt="" />
          </div>
        </section>
        <section className="listSongsPlaylist">
          <div>
            <img src={album} alt="" className="playlistSongsIcons" />
          </div>
          <div>
            <h5>Nombre cancion</h5>
            <p>Nombre artista</p>
          </div>
          <div className="songOptionsIcon">
            <img src={tresPuntos} alt="" />
          </div>
        </section>
        <section className="listSongsPlaylist">
          <div>
            <img src={album} alt="" className="playlistSongsIcons" />
          </div>
          <div>
            <h5>Nombre cancion</h5>
            <p>Nombre artista</p>
          </div>
          <div className="songOptionsIcon">
            <img src={tresPuntos} alt="" />
          </div>
        </section>
      </section>
    </div>
  );
}

export default Playlists;
