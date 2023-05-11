import React, { useState } from 'react';
import "../Styles/MusicaContextual.css"
import leftArrow from "../src/assets/Vector.svg";
import { Link } from "react-router-dom";

function Dropdown(props) {
    const { selectedOption, handleChange, options } = props;


    return (
        <div id='contenedorInput'>
            <label htmlFor="select-box">{options.label}</label>
            <div className="dropdown">
                <select id="select-box" value={selectedOption} onChange={handleChange}>
                    {options.choices.map((option) => (
                        <option id="options" key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}


function MusicaContextual() {
    const [selectedOption1, setSelectedOption1] = useState("");
    const [selectedOption2, setSelectedOption2] = useState("");
    const [selectedOption3, setSelectedOption3] = useState("");
    const [isEstiloElectronica, setIsEstiloElectronica] = useState(false);


    const handleChange1 = (event) => {
        setSelectedOption1(event.target.value);
        setIsOptionSelected(true);
    };

    const handleChange2 = (event) => {
        setSelectedOption2(event.target.value);
    };
    const handleChange3 = (event) => {
        setSelectedOption3(event.target.value);
    };

    const options2 = {
        label: "¿Cuál es la ocasión?",
        choices: [
            { value: "", label: "Actividad" },
            { value: "opcion1", label: "Ejercicio Físico" },
            { value: "opcion2", label: "Limpieza" },
            { value: "opcion3", label: "Celebración" },
            { value: "opcion4", label: "Dormir" },
            { value: "opcion5", label: "Meditar" },
            { value: "opcion6", label: "Social" },
            { value: "opcion7", label: "Estudiar" },
            { value: "opcion8", label: "Relajación" },
            { value: "opcion9", label: "Viajando" },
        ],
    };

    const options1 = {
        label: "¿Cómo te sientes?",
        choices: [
            { value: "", label: "Estado de ánimo" },
        ],
    };

    const options3 = {
        label: "¿Cómo está el clima?",
        choices: [
            { value: "", label: "Clima" },
        ],
    };

    const cambiarEstilo = () => {
        setIsEstiloElectronica(!isEstiloElectronica);
    };


    return (
        <div id='container'>
            <div id="top-gradient"></div>
            <div id='headerMC'>
                <Link to='/nav/home'>  <img src={leftArrow} alt="" className='arrowMC' /></Link>
                Música Contextual
            </div>
            <Dropdown selectedOption={selectedOption1} handleChange={handleChange1} options={options1} />
            <Dropdown selectedOption={selectedOption2} handleChange={handleChange2} options={options2} />
            <Dropdown selectedOption={selectedOption3} handleChange={handleChange3} options={options3} />
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
