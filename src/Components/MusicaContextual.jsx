import "../Styles/MusicaContextual.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import leftArrow from "../assets/Vector.svg";
import Dropdown from "./Dropdown.jsx";
import axios from "axios";
import vector from "../assets/vectorabajo.svg"

function MusicaContextual() {
    const [selectedOption, setSelectedOption] = useState(null);
    const [isElectronicaEnabled, setIsElectronicaEnabled] = useState(false);
    const [isEstiloElectronica, setIsEstiloElectronica] = useState(false);
    const [actividades, setActividades] = useState([]);
    const [actividadSeleccionada, setActividadSeleccionada] = useState(null);
    const [canciones, setCanciones] = useState([]);
    const [generos, setGeneros] = useState([]);
    const [generoSeleccionado, setGeneroSeleccionado] = useState({});

    useEffect(() => {
        const obtenerActividades = async () => {
            try {
                const respuesta = await axios.get(
                    "http://localhost:3000/api/actividades"
                );
                setActividades(respuesta.data);
            } catch (error) {
                console.error(error);
            }
        };
        obtenerActividades();
    }, []);

    useEffect(() => {
        const obtenerGeneros = async () => {
            if (actividadSeleccionada) {
                try {
                    const respuesta = await axios.get(
                        `http://localhost:3000/api/generos?actividad_id=${actividadSeleccionada}`
                    );

                    setGeneros(respuesta.data);
                } catch (error) {
                    console.error(error);
                }
            }
        };
        obtenerGeneros();
    }, [actividadSeleccionada]);

    useEffect(() => {
        const actividadesGuardadas = localStorage.getItem("actividades");
        if (actividadesGuardadas) {
            setActividades(JSON.parse(actividadesGuardadas));
        }
    }, []);

    const handleChangeActividad = (event) => {
        const actividadId = parseInt(event.target.value);
        setActividadSeleccionada(actividadId);
        localStorage.setItem("actividadSeleccionada", actividadId);
        const generoAsociado = generos.find(
            (genero) => genero.actividad_id === actividadId
        );
        if (generoAsociado) {
            setGeneroSeleccionado(generoAsociado.id);
            localStorage.setItem("generoSeleccionado", generoAsociado.id);
        }
        setSelectedOption(selectedOption);
        setIsElectronicaEnabled(
            selectedOption !== null && selectedOption.value === "opcion1"
        );
    };

    const handleChangeGenero = (event) => {
        const generoId = parseInt(event.target.value);
        setGeneroSeleccionado(generoId);
        localStorage.setItem("generoSeleccionado", generoId);
    };

    function handleGeneroSeleccionado(genero) {
        setGeneroSeleccionado(genero);
    }
    function handleSelectChange(selectedOption) {
        setSelectedOption(selectedOption);
        setIsElectronicaEnabled(
            selectedOption !== null && selectedOption.value === "opcion1"
        );
    }


    return (
        <div id="container">
            <div id="top-gradient"></div>
            <div id="headerMC">
                <Link to="/nav/home">
                    {" "}
                    <img src={leftArrow} alt="" className="arrowMC" />
                </Link>
                Música Contextual
            </div>
            <div id="contenedorDropdowns">
                <div id="contenedorAnimo">
                    <h1> ¿Cómo te sientes? </h1>
                    <button id="estadoDeAnimo">
                        <h7>Estado de Ánimo</h7>
                        <img id='vector' src={vector}></img>
                    </button>
                </div>
                <div>
                    <h1 htmlFor="actividades" > ¿Cuál es la ocasión? </h1>
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
                <div id="contenedorClima">
                    <h1> ¿Cómo está el clima? </h1>
                    <button id="clima">
                        <h7>Clima</h7>
                        <img id='vector2' src={vector}></img>
                    </button>
                </div>
            </div>
            <div id="contenedorGeneros">
                <p id="tituloGeneros">Selecciona hasta 3 géneros:</p>
                <div className="generos">
                    <button className="genero1">Rock</button>
                    <button className="genero1">Country</button>
                    <button className="genero1">Soul</button>
                    <button className="genero1">Jazz</button>
                    <button className="genero1">Blues</button>
                    <button className="genero1">Hip-Hop</button>
                    <button className="genero1">Pop</button>
                    <button className="genero1">Reggae</button>
                    <button className="genero1">Folk</button>
                    <button className="genero1">R&B</button>
                    <button className="genero1">Clásico</button>
                    <button className="genero1">Alternativo</button>
                    <button className="genero1">Ambiente</button>
                    <button className="genero1">EDM</button>
                    <button
                        className={isEstiloElectronica ? "electronica2" : "electronica1"}
                        onClick={() => {
                            setIsEstiloElectronica(!isEstiloElectronica);
                        }}
                        disabled={!isElectronicaEnabled}
                    >
                        Electronica
                    </button>
                    <button className="genero1">Disco </button>
                    <button className="genero1">New Age</button>
                    <button className="genero1">Punk</button>
                </div>
            </div>
            <Link to="/playlistMC">
                <button
                    disabled={!isEstiloElectronica}
                    className={
                        isEstiloElectronica ? "crearPlaylistEnabled" : "crearPlaylist"
                    }>
                    Crear Playlist
                </button>
            </Link>

        </div>
    );
}

export default MusicaContextual;
