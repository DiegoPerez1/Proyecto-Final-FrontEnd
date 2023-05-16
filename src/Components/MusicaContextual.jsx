import "../Styles/MusicaContextual.css";
import React, { useEffect, useState } from "react";
import vector from "../assets/Vector.svg";

function MusicaContextual() {
    const [cancionesGeneros, setCancionesGeneros] = useState("");
    const [actividad, setActividad] = useState("");
    const [generoSeleccionado, setGeneroSeleccionado] = useState([]);
    const [actividadGeneroSeleccionados, setActividadGeneroSeleccionados] =
        useState({});

    const fetchGeneros = async () => {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", localStorage.getItem("token"));
        myHeaders.append("Content-Type", "application/json");

        var requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: JSON.stringify({ genero: generoSeleccionado }), // Enviar el género en el body
            redirect: "follow",
        };

        try {
            const response = await fetch(
                "http://localhost:3000/api/cancionesporgenero",
                requestOptions
            );

            if (response.ok) {
                const data = await response.json();
                setCancionesGeneros(data);
                console.log(cancionesGeneros);
            }
        } catch (error) {
            console.error(error);
        }
    };
    useEffect(() => {
        if (generoSeleccionado.length > 0) {
            fetchGeneros();
        }
    }, [generoSeleccionado]);

    const handleActividadChange = (event) => {
        setActividad(event.target.value);
    };

    const handleGeneroClick = (genero) => {
        setGeneroSeleccionado(genero);
    };
    const handleCrearPlaylist = () => {
        if (actividad && generoSeleccionado) {
            // Guardar la combinación de actividad y género en el estado
            setActividadGeneroSeleccionados({
                actividad,
                genero: generoSeleccionado,
            });
            console.log(actividadGeneroSeleccionados);
        } else {
            console.log("Debes seleccionar una actividad y un género");
        }
    };
    console.log(generoSeleccionado)


    return (
        <div id="container">
            <div id="top-gradient"></div>
            <header id="header">
                <img src={vector} alt="icono de flecha" />
                <p id="cupido-title">Musica Contextual</p>
            </header>
            <div id="inputs-container">
                <div className="label-input">
                    <label htmlFor="actividad" id="label-actividad">
                        ¿Cuál es la ocasión?
                    </label>
                    <select
                        id="actividad"
                        name="actividad"
                        onChange={handleActividadChange}
                    >
                        <option value="" disabled selected>
                            Actividad
                        </option>
                        <option value="Ejercicio Físico">Ejercicio Fisico</option>
                        <option value="Limpieza">Limpieza</option>
                        <option value="Celebracion">Celebracion</option>
                        <option value="Dormir">Dormir</option>
                        <option value="Meditar">Meditar</option>
                        <option value="Social">Social</option>
                        <option value="Estudiar">Estudiar</option>
                        <option value="Relajacion">Relajacion</option>
                        <option value="Viajando">Viajando</option>
                    </select>
                </div>

                <div className="label-input">
                    <label htmlFor="estado" id="label-estado">
                        ¿Cómo te sientes?
                    </label>
                    <select id="estado" name="estado">
                        <option value="" disabled selected>
                            Estado de Animo
                        </option>
                        <option value="Feliz">Feliz</option>
                        <option value="Triste">Triste</option>
                        <option value="Enojado">Enojado</option>
                    </select>
                </div>
                <div className="label-input">
                    <label htmlFor="clima" id="label-clima">
                        ¿Cómo esta el clima?
                    </label>
                    <select id="clima" name="clima">
                        <option value="" disabled selected>
                            Clima
                        </option>
                        <option value="Calor">Calor</option>
                        <option value="Frio">Frio</option>
                        <option value="Lluvioso">Lluvioso</option>
                        <option value="Soleado">Soleado</option>
                    </select>
                </div>
            </div>

            <div id="contenedorGeneros">
                <p>Selecciona hasta 3 géneros:</p>
                <div className="generos">
                    <button
                        className={`genero1 ${generoSeleccionado === "Rock" ? "seleccionado" : ""
                            }`}
                        onClick={() => handleGeneroClick("Rock")}
                    >
                        Rock
                    </button>
                    <button
                        className={`genero1 ${generoSeleccionado === "Country" ? "seleccionado" : ""
                            }`}
                        onClick={() => handleGeneroClick("Country")}
                    >
                        Country
                    </button>
                    <button
                        className={`genero1 ${generoSeleccionado === "Soul" ? "seleccionado" : ""
                            }`}
                        onClick={() => handleGeneroClick("Soul")}
                    >
                        Soul
                    </button>
                    <button
                        className={`genero1 ${generoSeleccionado === "Jazz" ? "seleccionado" : ""
                            }`}
                        onClick={() => handleGeneroClick("Jazz")}
                    >
                        Jazz
                    </button>
                    <button
                        className={`genero1 ${generoSeleccionado === "Blues" ? "seleccionado" : ""
                            }`}
                        onClick={() => handleGeneroClick("Blues")}
                    >
                        Blues
                    </button>
                    <button
                        className={`genero1 ${generoSeleccionado === "Hip-Hop" ? "seleccionado" : ""
                            }`}
                        onClick={() => handleGeneroClick("Hip-Hop")}
                    >
                        Hip-Hop
                    </button>
                    <button
                        className={`genero1 ${generoSeleccionado === "Pop" ? "seleccionado" : ""
                            }`}
                        onClick={() => handleGeneroClick("Pop")}
                    >
                        Pop
                    </button>
                    <button
                        className={`genero1 ${generoSeleccionado === "Reggae" ? "seleccionado" : ""
                            }`}
                        onClick={() => handleGeneroClick("Reggae")}
                    >
                        Reggae
                    </button>
                    <button
                        className={`genero1 ${generoSeleccionado === "Folk" ? "seleccionado" : ""
                            }`}
                        onClick={() => handleGeneroClick("Folk")}
                    >
                        Folk
                    </button>
                    <button
                        className={`genero1 ${generoSeleccionado === "R&B" ? "seleccionado" : ""
                            }`}
                        onClick={() => handleGeneroClick("R&B")}
                    >
                        R&B
                    </button>
                    <button
                        className={`genero1 ${generoSeleccionado === "Clasico" ? "seleccionado" : ""
                            }`}
                        onClick={() => handleGeneroClick("Clasico")}
                    >
                        Clasico
                    </button>
                    <button
                        className={`genero1 ${generoSeleccionado === "Alternativo" ? "seleccionado" : ""
                            }`}
                        onClick={() => handleGeneroClick("Alternativo")}
                    >
                        Alternativo
                    </button>
                    <button
                        className={`genero1 ${generoSeleccionado === "Ambiente" ? "seleccionado" : ""
                            }`}
                        onClick={() => handleGeneroClick("Ambiente")}
                    >
                        Ambiente
                    </button>
                    <button
                        className={`genero1 ${generoSeleccionado === "EDM" ? "seleccionado" : ""
                            }`}
                        onClick={() => handleGeneroClick("EDM")}
                    >
                        EDM
                    </button>
                    <button
                        className={`genero1 ${generoSeleccionado === "Electronica" ? "seleccionado" : ""
                            }`}
                        onClick={() => handleGeneroClick("Electronica")}
                    >
                        Electronica
                    </button>
                    <button
                        className={`genero1 ${generoSeleccionado === "Disco" ? "seleccionado" : ""
                            }`}
                        onClick={() => handleGeneroClick("Disco")}
                    >
                        Disco
                    </button>
                    <button
                        className={`genero1 ${generoSeleccionado === "New Age" ? "seleccionado" : ""
                            }`}
                        onClick={() => handleGeneroClick("New Age")}
                    >
                        New Age
                    </button>
                    <button
                        className={`genero1 ${generoSeleccionado === "Punk" ? "seleccionado" : ""
                            }`}
                        onClick={() => handleGeneroClick("Punk")}
                    >
                        Punk
                    </button>
                </div>
            </div>
            <button id="crear-btn" onClick={handleCrearPlaylist}>
                Crear Playlist
            </button>
        </div>
    );
}

export default MusicaContextual;