import React from 'react';
import "../Styles/error404.css";
import { Link } from "react-router-dom";

function Error404() {
    return (
        <div id="container">
            <div id="top-gradient"></div>
            <div id="error">
                <p id="tituloError">Error 404</p>
                <p id="mensajeError">La página que estás buscando no se encuentra.</p>
            </div>
            <Link to='/nav/home'> <button id="botonvolver"> Volver al menú principal </button> </Link>

        </div>
    )
}

export default Error404