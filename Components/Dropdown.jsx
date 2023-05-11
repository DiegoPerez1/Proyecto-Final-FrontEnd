import React, { useState } from 'react';
import vector from "../src/assets/vectorabajo.svg";
import "../Styles/Dropdown.css";




function Dropdown(props) {
    const { selectedOption, handleChange, options } = props;

    return (
        <div id='contenedorInput'>
            <label htmlFor="select-box">{options.label}</label>
            <select value={selectedOption} onChange={handleChange}>
                {options.choices.map((option) => (
                    <option id="optionsDesplegable" key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
            <img src={vector} id='vector'></img>
        </div>
    );
}

export default Dropdown;
