import React from 'react';
import "../Styles/PlaylistMC.css";
import { Link } from "react-router-dom";
import leftArrow from "../src/assets/Vector.svg";
import Navbar from './NavBar';
import placeholderIcon from "../src/assets/placeholder-icon.svg";
import verified from "../src/assets/verified-icon.svg";
import share from "../src/assets/share-icon.svg";
import history from "../src/assets/history-icon.svg";
import copy from "../src/assets/copy-icon.svg";
import shuffle from "../src/assets/shuffle-icon.svg";
import play from "../src/assets/play-icon.svg";

function PlaylistMC() {
    return (
        <>
            <div id='top-gradient'></div>
            <div id='headerMC'>
                <Link to='/musicacontextual'>  <img src={leftArrow} alt="" className='arrow' /></Link>
                <span id='tituloheader1'> Generada de Música Contextual</span>
                <span id='tituloheader2'> Playlist Generada </span>
            </div>
            <div id='divfotosalbum'></div>
            <div id='logosyduracion'>
                <img src={placeholderIcon}></img>
                <img src={verified}></img>
                <img src={share}></img>
                <p id='duracion-playlist'> 1h 17m </p>
                <img src={history} id='history-icon'></img>
            </div>
            <div id='crearcopiayplay'>
                <img src={copy} id='copy-icon'></img>
                <p id='crearcopia'> Crear Copia </p>
                <img src={shuffle} id='shuffle-icon'></img>
                <img src={play} id='play-icon'></img>
            </div>
            <div id='listacanciones'></div>
            <Navbar />

        </>
    )
}

export default PlaylistMC