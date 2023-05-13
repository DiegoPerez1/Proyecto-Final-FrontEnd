import '../Styles/CreatePlaylist.css'
import { Link } from "react-router-dom";
import leftArrow from '../assets/Vector.svg'

function CreatePlaylist() {
    return (
        <div className='createPlaylistContainer'>
            <header className='headerCreatePlaylist'>
                <div>
                    <Link to={'/profile'}> <img src={leftArrow} alt="" /></Link>
                </div>
                <div>
                    <h4>Crear Playlist</h4>
                </div>
            </header>
            <section className='textSectionCreatePlaylist'>
                <h2>¿Como se llamara tu playlist?</h2>
            </section>
            <section className='inputSectionCreatePlaylist'>
                <label htmlFor="">Nombre de la playlist:</label>
                <input type="text" name="" id="" className='inputCreatePlaylist' />
            </section>
            <section className='buttonSectionCreatePlaylist'>
                <Link to={'/playlist'}> <button className='buttonCreatePlaylist'>Continuar</button></Link>
            </section>
        </div>
    )
}

export default CreatePlaylist