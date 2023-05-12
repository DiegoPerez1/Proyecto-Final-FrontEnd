import React, { useState, useEffect } from 'react';
import "../Styles/MusicaContextual.css"
import leftArrow from "../src/assets/Vector.svg";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown.jsx";
import vector from "../src/assets/vectorabajo.svg"


function MusicaContextual() {
    const [isEstiloElectronica, setIsEstiloElectronica] = useState(false);


    return (
        <div id='container'>
            <div id="top-gradient"></div>
            <div id='headerMC'>
                <Link to='/nav/home'>  <img src={leftArrow} alt="" className='arrowMC' /></Link>
                Música Contextual
            </div>
            <div id="contenedorDropdowns">
                <Dropdown titulo={"¿Cuál es la ocasión?"} placeholder={"Actividad"} />
                <div id='contenedorAnimo'>
                    <h1> ¿Cómo te sientes? </h1>
                    <button id='estadoDeAnimo'>
                        <h7>Estado de Ánimo</h7>
                        {/* <img id='vector' src={vector}></img> */}
                    </button>
                </div>
                <div id='contenedorClima'>
                    <h1> ¿Cómo está el clima? </h1>
                    <button id='clima'>
                        <h7>Clima</h7>
                        {/* <img id='vector' src={vector}></img> */}
                    </button>
                </div>
            </div>
            <div id='contenedorGeneros'>
                <p id='tituloGeneros'>Selecciona hasta 3 géneros:</p>
                <div className='generos'>
                    <button className='genero1' >Rock</button>
                    <button className='genero1' >Country</button>
                    <button className='genero1' >Soul</button>
                    <button className='genero1' >Jazz</button>
                    <button className='genero1' >Blues</button>
                    <button className='genero1' >Hip-Hop</button>
                    <button className='genero1' >Pop</button>
                    <button className='genero1' >Reggae</button>
                    <button className='genero1' >Folk</button>
                    <button className='genero1' >R&B</button>
                    <button className='genero1' >Clásico</button>
                    <button className='genero1' >Alternativo</button>
                    <button className='genero1' >Ambiente</button>
                    <button className='genero1' >EDM</button>
                    <button className={isEstiloElectronica ? 'electronica2' : 'electronica1'} onClick={() => { setIsEstiloElectronica(!isEstiloElectronica); cambiarEstilo(); }}>Electrónica</button>
                    <button className='genero1' >Disco</button>
                    <button className='genero1' >New Age</button>
                    <button className='genero1' >Punk</button>
                </div>
            </div>
            <Link to='/playlistMC'><button disabled={!isEstiloElectronica} className={isEstiloElectronica ? 'crearPlaylistEnabled' : 'crearPlaylist'}>Crear Playlist</button></Link>
        </div>
    )
}

export default MusicaContextual;
