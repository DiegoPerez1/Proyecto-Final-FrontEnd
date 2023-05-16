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
        setSelectedOption(selectedOption);
        setIsElectronicaEnabled(
            selectedOption !== null && selectedOption.value === "opcion1"
        );
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
                        id="actividades"
                        value={actividadSeleccionada || ""}
                        onChange={handleChangeActividad}
                    >
                        <option value="">Actividad </option>
                        {actividades.map((actividad) => (
                            <option key={actividad.id} value={actividad.id}>
                                {actividad.nombre}
                            </option>
                        ))}
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
                        className={isEstiloElectronica ? "electronica2" : "electronica1"}
                        onClick={() => {
                            setIsEstiloElectronica(!isEstiloElectronica);
                        }}
                        disabled={!isElectronicaEnabled}
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