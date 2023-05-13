import "../Styles/PlaylistMC.css";
import { Link } from "react-router-dom";
import leftArrow from "../assets/Vector.svg";
import placeholderIcon from "../assets/placeholder-icon.svg";
import verified from "../assets/verified-icon.svg"
import share from "../assets/share-icon.svg";
import history from "../assets/history-icon.svg";
import copy from "../assets/copy-icon.svg";
import shuffle from "../assets/shuffle-icon.svg";
import play from "../assets/play-icon.svg";
import tresPuntos from "../assets/trespuntos.svg";
import homeActive from "../assets/home-icon-active.svg";
import searchActive from "../assets/search-icon-active.svg";
import profileActive from "../assets/profile-icon-active.svg";
import friendsActive from "../assets/friends-icon-active.svg";
import deadmau5 from "../assets/cupido-img/Deadmau5.png";


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
            <div id='divfotosalbum'>
                <img src={deadmau5} id="fotogrande"></img>
            </div>
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
                        <img src={deadmau5} id="fotocancion" />
                        <h5> Strobe </h5>
                        <h6> Deadmau5 </h6>
                        <img src={tresPuntos} id="puntoslista"></img>
                    </li>
                </ul>
                <ul className='listaFotos'>
                    <li id="puntosFotos">
                        <img src={deadmau5} id="fotocancion" />
                        <h5> Ghosts N Stuff </h5>
                        <h6> Deadmau5 </h6>
                        <img src={tresPuntos} id="puntoslista"></img>
                    </li>
                </ul>
                <ul className='listaFotos'>
                    <li id="puntosFotos">
                        <img src={deadmau5} id="fotocancion" />
                        <h5> I Remember </h5>
                        <h6> Deadmau5 </h6>
                        <img src={tresPuntos} id="puntoslista"></img>
                    </li>
                </ul>
                <ul className='listaFotos'>
                    <li id="puntosFotos">
                        <img src={deadmau5} id="fotocancion" />
                        <h5> Faxing Berlin </h5>
                        <h6> Deadmau5 </h6>
                        <img src={tresPuntos} id="puntoslista"></img>
                    </li>
                </ul>
                <ul className='listaFotos'>
                    <li id="puntosFotos">
                        <img src={deadmau5} id="fotocancion" />
                        <h5> The Veldt </h5>
                        <h6> Deadmau5 </h6>
                        <img src={tresPuntos} id="puntoslista"></img>
                    </li>
                </ul>
                <ul className='listaFotos'>
                    <li id="puntosFotos">
                        <img src={deadmau5} id="fotocancion" />
                        <h5> Fn Pig </h5>
                        <h6> Deadmau5 </h6>
                        <img src={tresPuntos} id="puntoslista"></img>
                    </li>
                </ul>
                <ul className='listaFotos'>
                    <li id="puntosFotos">
                        <img src={deadmau5} id="fotocancion" />
                        <h5> Not Exactly </h5>
                        <h6> Deadmau5 </h6>
                        <img src={tresPuntos} id="puntoslista"></img>
                    </li>
                </ul>
                <ul className='listaFotos'>
                    <li id="puntosFotos">
                        <img src={deadmau5} id="fotocancion" />
                        <h5> Maths </h5>
                        <h6> Deadmau5 </h6>
                        <img src={tresPuntos} id="puntoslista"></img>
                    </li>
                </ul>
                <ul className='listaFotos'>
                    <li id="puntosFotos">
                        <img src={deadmau5} id="fotocancion" />
                        <h5> Avaritia </h5>
                        <h6> Deadmau5 </h6>
                        <img src={tresPuntos} id="puntoslista"></img>
                    </li>
                </ul>
                <ul className='listaFotos'>
                    <li id="puntosFotos">
                        <img src={deadmau5} id="fotocancion" />
                        <h5> Some Chords </h5>
                        <h6> Deadmau5 </h6>
                        <img src={tresPuntos} id="puntoslista"></img>
                    </li>
                </ul>

            </div>
            <nav id="nav-container">
                <ul id="list-container">
                    <li className="item-nav"><Link to="/nav/home" className="nav-link"><img src={homeActive} /><p>Inicio</p> </Link></li>
                    <li className="item-nav"><Link to="/nav/search" className="nav-link"><img src={searchActive} /><p>Buscador</p> </Link></li>
                    <li className="item-nav"><Link to="/nav/profile" className="nav-link"><img src={profileActive} /><p>Perfil</p> </Link></li>
                    <li className="item-nav"><img src={friendsActive} /><p>Amigos</p></li>
                </ul>
            </nav>
        </div>
    )
}

export default PlaylistMC