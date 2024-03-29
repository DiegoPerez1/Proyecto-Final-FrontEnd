import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Styles/CupidoMusical.css";
import Vector from "../assets/Vector.svg";
import like from "../assets/green-heart.svg";
import pass from "../assets/red-cross.svg";
import Playlists from "./Playlists";
import Modal from 'react-modal';
import ModalC from "../assets/modalC.svg";



function CupidoMusical() {
  const [artistas, setArtistas] = useState([]); //almacena la lista de artistas
  const [currentArtist, setCurrentArtist] = useState([]); //artista actual que se muestra en pantalla
  const [artistasSelect, setArtistasSelect] = useState([]); //almacena artistas seleccionados por el usuario en una lista
  const [playlistCreated, setPlaylistCreated] = useState(false);
  const [cancionesPlaylist, setCancionesPlaylist] = useState([]);
  const navigate = useNavigate()


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
    const currentIndex = artistas.indexOf(currentArtist);
    const nextIndex = (currentIndex + 1) % artistas.length;
    const nextArtist = artistas[nextIndex];

    // Actualiza el estado currentArtist para mostrar el siguiente artista de la lista
    // y agrega el artista actual a la lista de artistasSelect.
    setCurrentArtist(nextArtist);
    setArtistasSelect((prevArtistasSelect) => [...prevArtistasSelect, currentArtist.nombre]);
  };

  localStorage.setItem("artistas", JSON.stringify(artistasSelect));

  const onClickPass = () => {
    const currentIndex = artistas.indexOf(currentArtist);
    const nextIndex = (currentIndex + 1) % artistas.length;
    const nextArtist = artistas[nextIndex];

    if (nextArtist !== currentArtist) {
      setCurrentArtist(nextArtist);
      setArtistasSelect((prevArtistasSelect) => [...prevArtistasSelect, currentArtist?.nombre]);
    }
  };

  const onClickCrearPlaylist = () => {
    const token = localStorage.getItem("token");
    fetch(`http://localhost:3000/api/cupidoMusical`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token, // Envía el token en el encabezado Authorization
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
        localStorage.setItem("idPlaylist", data.playlistId)
        navigate("/nav/playlist")
      })
      .catch((error) => console.error(error));
  };


  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };
  useEffect(() => {
    openModal(); // Abre el modal cuando se carga el componente
  }, []);

  const closeModal = () => {
    setModalIsOpen(false);
  };


  return (
    <div id="container" className={modalIsOpen ? 'blur' : ''}>
      <div id="top-gradient"></div>
      <header id="header-cupido">
        <Link to="/nav/home"><img src={Vector} id="back-cupido" /></Link>
        <p id="cupido-title">Cupido Musical</p>
      </header>
      <main>
        <img id="img-artist" src={`${"/"}${currentArtist?.imagen}${".png"}`} alt={currentArtist?.nombre} />

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

      <div >
        {modalIsOpen && <div className="overlay"></div>}
        <Modal id="contenedorModal" isOpen={modalIsOpen} onRequestClose={closeModal}>
          <p id='tituloModal'> Cupido Musical</p>
          <img id='fotoModal' src={ModalC}></img>
          <p id='contenidoModal'>Luego de al menos 2 me gusta, confirma tu selección y crearemos una playlist rápida con los artistas que fueron un match.</p>
          <button id='botonEntendido' onClick={closeModal}>Entendido</button>
          <p id='mensajeModal' onClick={closeModal}> No volver a mostrar</p>
        </Modal>
      </div>

    </div>
  );
}

export default CupidoMusical;
