import "../Styles/MusicaContextual.css"
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import leftArrow from "../assets/Vector.svg";
import Dropdown from "./Dropdown.jsx";


function MusicaContextual() {
    const [selectedOption, setSelectedOption] = useState(null);
    const [isElectronicaEnabled, setIsElectronicaEnabled] = useState(false);
    const [isEstiloElectronica, setIsEstiloElectronica] = useState(false)


    function handleSelectChange(selectedOption) {
        setSelectedOption(selectedOption);
        setIsElectronicaEnabled(selectedOption !== null && selectedOption.value === "opcion1");
    }


    // const handleCreatePlaylist = () => {
    //     const token = localStorage.getItem("token");

    //     fetch(`/actividades/${actividadId}/lista-reproduccion`, {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //             Authorization: `${token}`,
    //         },
    //         body: JSON.stringify({ artistas: artistasSelect }),
    //     })
    //         .then((response) => {
    //             if (!response.ok) {
    //                 throw new Error("Error en la respuesta del servidor");
    //             }
    //             return response.json();
    //         })
    //         .then((data) => {
    //             console.log(data);
    //             setPlaylistCreated(true);
    //         })
    //         .catch((error) => console.error(error));
    // };

    return (
        <div id='container'>
            <div id="top-gradient"></div>
            <div id='headerMC'>
                <Link to='/nav/home'>  <img src={leftArrow} alt="" className='arrowMC' /></Link>
                Música Contextual
            </div>
            <div id="contenedorDropdowns">
                <Dropdown titulo={"¿Cuál es la ocasión?"} placeholder={"Actividad"} handleChange={handleSelectChange} />
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
                    <button className={isEstiloElectronica ? 'electronica2' : 'electronica1'} onClick={() => { setIsEstiloElectronica(!isEstiloElectronica) }} disabled={!isElectronicaEnabled}>
                        Electronica
                    </button>
                    <button className='genero1'>Disco </button>
                    <button className='genero1' >New Age</button>
                    <button className='genero1' >Punk</button>
                </div>
            </div>
            <Link to='/playlistMC'><button disabled={!isEstiloElectronica} className={isEstiloElectronica ? 'crearPlaylistEnabled' : 'crearPlaylist'} >Crear Playlist</button></Link>
        </div>
    )
}

export default MusicaContextual;