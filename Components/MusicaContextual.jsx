import React, { useState } from 'react';
import "../Styles/MusicaContextual.css"
import leftArrow from "../src/assets/Vector.svg";
import { Link } from "react-router-dom";

function SelectBox(props) {
    const { selectedOption, handleChange, options } = props;

    return (
        <div id='contenedorInput'>
            <label htmlFor="select-box">{options.label}</label>
            <select id="select-box" value={selectedOption} onChange={handleChange}>
                {options.choices.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
}



function MusicaContextual() {
    const [selectedOption1, setSelectedOption1] = useState("");
    const [selectedOption2, setSelectedOption2] = useState("");
    const [selectedOption3, setSelectedOption3] = useState("");
    const [isOptionSelected, setIsOptionSelected] = useState(false);

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

    const options1 = {
        label: "¿Cuál es la ocasión?",
        choices: [
            // { value: "", label: "Actividad" },
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

    const options2 = {
        label: "¿Cómo te sientes?",
        choices: [
            { value: "", label: "Estado de ánimo" },
            // { value: "opcion1", label: "Feliz" },
            // { value: "opcion2", label: "Triste" },
            // { value: "opcion3", label: "Relajado" },
            // { value: "opcion4", label: "Energético" },
            // { value: "opcion5", label: "Estresado" },
        ],
    };

    const options3 = {
        label: "¿Cómo está el clima?",
        choices: [
            { value: "", label: "Clima" },
            // { value: "opcion1", label: "Soleado" },
            // { value: "opcion2", label: "Nublado" },
            // { value: "opcion3", label: "LLuvioso" },
            // { value: "opcion4", label: "Neblinoso" },
            // { value: "opcion5", label: "Nevado" },
        ],
    };

    return (
        <div id='container'>
            <div id="top-gradient"></div>
            <div id='headerMC'>
                <Link to='/nav/home'>  <img src={leftArrow} alt="" className='arrow' /></Link>
                Música Contextual
            </div>
            <SelectBox selectedOption={selectedOption1} handleChange={handleChange1} options={options1} />
            <SelectBox selectedOption={selectedOption2} handleChange={handleChange2} options={options2} />
            <SelectBox selectedOption={selectedOption3} handleChange={handleChange3} options={options3} />
            <div id='contenedorGeneros'>
                <p id='tituloGeneros'>Selecciona hasta 3 géneros:</p>
                <div className='generos'>
                    <button className='genero' >Rock</button>
                    <button className='genero' >Country</button>
                    <button className='genero' >Soul</button>
                    <button className='genero' >Jazz</button>
                    <button className='genero' >Blues</button>
                    <button className='genero' >Hip-Hop</button>
                    <button className='genero' >Pop</button>
                    <button className='genero' >Reggae</button>
                    <button className='genero' >Folk</button>
                    <button className='genero' >R&B</button>
                    <button className='genero' >Clásico</button>
                    <button className='genero' >Alternativo</button>
                    <button className='genero' >Ambiente</button>
                    <button className='genero' >EDM</button>
                    <button className='genero' >Electrónica</button>
                    <button className='genero' >Disco</button>
                    <button className='genero' >New Age</button>
                    <button className='genero' >Punk</button>
                </div>
            </div>

            <button id='crearPlaylist' disabled={!isOptionSelected}> Crear Playlist </button>

        </div>
    )
}

export default MusicaContextual;
