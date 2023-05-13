import "../Styles/CupidoMusical.css";
import { useState, useEffect } from "react";
import Vector from "../assets/Vector.svg";
import like from "../assets/green-heart.svg";
import pass from "../assets/red-cross.svg";
import Marley from "../assets/cupido-img/Marley.png";
import Ozuna from "../assets/cupido-img/Ozuna.png";
import Justin from "../assets/cupido-img/Justin.png";
import Angeles from "../assets/cupido-img/Angeles.png";
import Queen from "../assets/cupido-img/Queen.png";
import Yanni from "../assets/cupido-img/Yanni.png";
import Kendrick from "../assets/cupido-img/Kendrick.png";
import Deadmau5 from "../assets/cupido-img/Deadmau5.png";
import Brian from "../assets/cupido-img/Brian.png";
import Beegees from "../assets/cupido-img/Beegees.png";

function CupidoMusical() {
  const [artistas, setArtistas] = useState([]); //almacena la lista de artistas
  const [currentArtist, setCurrentArtist] = useState([]); //artista actual que se muestra en pantalla
  const [artistasSelect, setArtistasSelect] = useState([]); //almacena artistas seleccionados por el usuario en una lista
  const [playlistCreated, setPlaylistCreated] = useState(false);


  useEffect(() => {
    // se realiza una solicitud GET a /api/artistas para obtener una lista de artistas desde el servidor.
    // Luego, se actualiza el estado artistas con los datos obtenidos y se establece el primer artista como currentArtist.
    const fetchArtistas = async () => {
      var myHeaders = new Headers();
      myHeaders.append("Authorization", localStorage.getItem("token"));
      myHeaders.append("Content-Type", "application/json");
  
      var requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
      };
      try {
        const response = await fetch("http://localhost:3000/api/artistas", requestOptions);
        if (response.ok) {
          const data = await response.json();
          setArtistas(data);
          if (data.length > 0) {
            setCurrentArtist(data[0]);
          }
        }
      } catch (error) {
        console.error(error);
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
  console.log(artistasSelect);

  const onClickPass = () => {
    const currentIndex = artistas.indexOf(currentArtist);
    const nextIndex = (currentIndex + 1) % artistas.length;
    const nextArtist = artistas[nextIndex];

    if (nextArtist !== currentArtist) {
      setCurrentArtist(nextArtist);
    }
  };

  const onClickCrearPlaylist= () => {
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
        setPlaylistCreated(true);
      })
      .catch((error) => console.error(error));
  };
 
  console.log(currentArtist?.imagen)
  return (
    <div id="container">
      <div id="top-gradient"></div>
      <header id="header">
        <img src={Vector} alt="icono de flecha" />
        <p id="cupido-title">Cupido Musical</p>
      </header>
      <main>
      <img id="img-artist" src={`../assets/cupido-img/${currentArtist.imagen}.png`} alt={`Foto de ${currentArtist.imagen}`} />
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
