import React from 'react';
import "../Styles/PlaylistMC.css";
import { Link } from "react-router-dom";
import leftArrow from "../src/assets/Vector.svg";
import Navbar from './NavBar';
import placeholderIcon from "../src/assets/placeholder-icon.svg";
import verified from "../src/assets/verified-icon.svg"
import share from "../src/assets/share-icon.svg";
import history from "../src/assets/history-icon.svg";
import copy from "../src/assets/copy-icon.svg";
import shuffle from "../src/assets/shuffle-icon.svg";
import play from "../src/assets/play-icon.svg";
import tresPuntos from "../src/assets/trespuntos.svg";
import homeActive from "../src/assets/home-icon-active.svg";
import searchActive from "../src/assets/search-icon-active.svg";
import profileActive from "../src/assets/profile-icon-active.svg";
import friendsActive from "../src/assets/friends-icon-active.svg";
import Prueba from "../src/assets/prueba.svg"


function PlaylistMC() {
    return (
        <div>
            <div id='top-gradient'></div>
            <div id='headerMC'>
                <Link to='/musicacontextual'>  <img src={leftArrow} alt="" className='arrowMC' /></Link>
                <img src={tresPuntos} id="trespuntos"></img>
                <span id='tituloheader1'> Generada de Música Contextual</span>
                <span id='tituloheader2'> Playlist Generada </span>
            </div>
            <div id='divfotosalbum'></div>
            <div id='logosyduracion'>
                <img src={placeholderIcon} id='placeholder'></img>
                <img src={verified} id='verified'></img>
                <img src={share} id='share'></img>
                <p id='duracion-playlist'> 1h 17m </p>
                <img src={history} id='history-icon'></img>
            </div>
            <div id='crearcopiayplay'>
                <img src={copy} id='copy-icon'></img>
                <p id='crearcopia'> Crear Copia </p>
                <img src={shuffle} id='shuffle-icon'></img>
                <img src={play} id='play-icon'></img>
            </div>
            <div id='listacanciones'>
                <ul className='listaFotos'>
                    <li id="puntosFotos">
                        <img src={Prueba} id="fotocancion" />
                        <h5> Nombre cancion </h5>
                        <img src={tresPuntos} id="puntoslista"></img>
                    </li>
                </ul>
                <ul className='listaFotos'>
                    <li id="puntosFotos">
                        <img src={Prueba} id="fotocancion" />
                        <h5> Nombre cancion </h5>
                        <img src={tresPuntos} id="puntoslista"></img>
                    </li>
                </ul>
                <ul className='listaFotos'>
                    <li id="puntosFotos">
                        <img src={Prueba} id="fotocancion" />
                        <h5> Nombre cancion </h5>
                        <img src={tresPuntos} id="puntoslista"></img>
                    </li>
                </ul>
                <ul className='listaFotos'>
                    <li id="puntosFotos">
                        <img src={Prueba} id="fotocancion" />
                        <h5> Nombre cancion </h5>
                        <img src={tresPuntos} id="puntoslista"></img>
                    </li>
                </ul>
                <ul className='listaFotos'>
                    <li id="puntosFotos">
                        <img src={Prueba} id="fotocancion" />
                        <h5> Nombre cancion </h5>
                        <img src={tresPuntos} id="puntoslista"></img>
                    </li>
                </ul>
                <ul className='listaFotos'>
                    <li id="puntosFotos">
                        <img src={Prueba} id="fotocancion" />
                        <h5> Nombre cancion </h5>
                        <img src={tresPuntos} id="puntoslista"></img>
                    </li>
                </ul>
                <ul className='listaFotos'>
                    <li id="puntosFotos">
                        <img src={Prueba} id="fotocancion" />
                        <h5> Nombre cancion </h5>
                        <img src={tresPuntos} id="puntoslista"></img>
                    </li>
                </ul>
                <ul className='listaFotos'>
                    <li id="puntosFotos">
                        <img src={Prueba} id="fotocancion" />
                        <h5> Nombre cancion </h5>
                        <img src={tresPuntos} id="puntoslista"></img>
                    </li>
                </ul>
                <ul className='listaFotos'>
                    <li id="puntosFotos">
                        <img src={Prueba} id="fotocancion" />
                        <h5> Nombre cancion </h5>
                        <img src={tresPuntos} id="puntoslista"></img>
                    </li>
                </ul>
                <ul className='listaFotos'>
                    <li id="puntosFotos">
                        <img src={Prueba} id="fotocancion" />
                        <h5> Nombre cancion </h5>
                        <img src={tresPuntos} id="puntoslista"></img>
                    </li>
                </ul>
                <ul className='listaFotos'>
                    <li id="puntosFotos">
                        <img src={Prueba} id="fotocancion" />
                        <h5> Nombre cancion </h5>
                        <img src={tresPuntos} id="puntoslista"></img>
                    </li>
                </ul>
                <ul className='listaFotos'>
                    <li id="puntosFotos">
                        <img src={Prueba} id="fotocancion" />
                        <h5> Nombre cancion </h5>
                        <img src={tresPuntos} id="puntoslista"></img>
                    </li>
                </ul>
                <ul className='listaFotos'>
                    <li id="puntosFotos">
                        <img src={Prueba} id="fotocancion" />
                        <h5> Nombre cancion </h5>
                        <img src={tresPuntos} id="puntoslista"></img>
                    </li>
                </ul>
                <ul className='listaFotos'>
                    <li id="puntosFotos">
                        <img src={Prueba} id="fotocancion" />
                        <h5> Nombre cancion </h5>
                        <img src={tresPuntos} id="puntoslista"></img>
                    </li>
                </ul>
                <ul className='listaFotos'>
                    <li id="puntosFotos">
                        <img src={Prueba} id="fotocancion" />
                        <h5> Nombre cancion </h5>
                        <img src={tresPuntos} id="puntoslista"></img>
                    </li>
                </ul>
                <ul className='listaFotos'>
                    <li id="puntosFotos">
                        <img src={Prueba} id="fotocancion" />
                        <h5> Nombre cancion </h5>
                        <img src={tresPuntos} id="puntoslista"></img>
                    </li>
                </ul>
                <ul className='listaFotos'>
                    <li id="puntosFotos">
                        <img src={Prueba} id="fotocancion" />
                        <h5> Nombre cancion </h5>
                        <img src={tresPuntos} id="puntoslista"></img>
                    </li>
                </ul>
            </div>
            <nav id="nav-container">
                <ul id="list-container">
                    <Link to="/nav/home"><li> <img src={homeActive} /> Inicio</li></Link>
                    <Link to="/nav/search"><li> <img src={searchActive} /> Buscador</li></Link>
                    <Link to="/profile"><li> <img src={profileActive} /> Perfil</li></Link>
                    <li> <img src={friendsActive} /> Amigos</li>
                </ul>
            </nav>
        </div>
    )
}

export default PlaylistMC