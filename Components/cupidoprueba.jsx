import React, { useEffect, useState } from "react";

function CupidoMusical() {
    const [artistas, setArtistas] = useState([]);
    const [artistasSelect, setArtistasSelect] = useState([]);
    const [usuarios, setUsuarios] = useState([]);

    const [playlistCreated, setPlaylistCreated] = useState(false);

    useEffect(() => {
        fetch("http://localhost:3000/api/artistas")
            .then((response) => response.json())
            .then((data) => {
                setArtistas(data);
            });
    }, []);

    useEffect(() => {
        localStorage.setItem("artistasSelect", JSON.stringify(artistasSelect));
    }, [artistasSelect]);

    const handleCreatePlaylist = () => {
        const token = localStorage.getItem("token");

        fetch(`http://localhost:3000/api/cupidoMusical`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `${token}`,
            },
            body: JSON.stringify({ artistas: artistasSelect }),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Error en la respuesta del servidor");
                }
                return response.json();
            })
            .then((data) => {
                console.log(data);
                setPlaylistCreated(true);
            })
            .catch((error) => console.error(error));
    };

    const handleSelectArtista = (nombreArtista) => {
        if (artistasSelect.includes(nombreArtista)) {
            setArtistasSelect(
                artistasSelect.filter((artista) => artista !== nombreArtista)
            );
        } else {
            setArtistasSelect([...artistasSelect, nombreArtista]);
        }
    };

    const handleSelectUsuario = (event) => {
        setUsuarioSelect(event.target.value);
    };
    return (
        <div>
            <h2>Lista de artistas</h2>
            <ul>
                {artistas.map((artista) => (
                    <li
                        key={artista.nombre}
                        onClick={() => handleSelectArtista(artista.nombre)}
                        className={
                            artistasSelect.includes(artista.nombre) ? "selected" : ""
                        }>
                        {artista.nombre}
                    </li>
                ))}
            </ul>
            <button onClick={handleCreatePlaylist}>
                Crear lista de reproducción
            </button>
            {playlistCreated && <p>Lista de reproducción creada con éxito.</p>}
            <h2>Lista de usuarios</h2>
            <ul>
                {usuarios.map((usuario) => (
                    <li key={usuario.id}>{usuario.nombre}</li>
                ))}
            </ul>
        </div>
    );
}

export default CupidoMusical;
