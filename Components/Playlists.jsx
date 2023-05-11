import React from 'react'
import '../Styles/Playlist.css'
import leftArrow from '../src/assets/Vector.svg'
import tresPuntos from '../src/assets/trespuntos.svg'
import profilePiccPlaylist from '../src/assets/profile-pic.png'
import addFriend from '../src/assets/addFriendIcon.svg'
import album from '../src/assets/albumImg.png'
import candadoOpen from '../src/assets/candadoOpen.svg'
import share from '../src/assets/compartirIcon.svg'
import reloj from '../src/assets/relojIcon.svg'
import addIcon from '../src/assets/agregarIcon.svg'
import shuffle from '../src/assets/aleatorioIcon.svg'
import playButton from '../src/assets/playButton.svg'

function Playlists() {
    return (
        <div className='contenedorPlayList'>
            <header className='headerPlayList'>
                <section><img src={leftArrow} alt="" /> </section>
                <section>nombreDeLaPlayulist </section>
                <section><img src={tresPuntos} alt="" /></section>
            </header>
            <section className='infoUserSection'>
                <div className='userInfo'>
                    <img src={profilePiccPlaylist} alt="" /> <p>mara_pg</p>
                </div>
                <div >
                    <img src={addFriend} alt="" className='iconsPlaylist' />
                </div>
            </section>
            <section className='albumPlaylistSection'>
                <img src={album} alt="" />
            </section>
            <section className='albumOptionsSection'>
                <section className='buttonAlbumSection'>
                    <div><button className='buttonPlaylist'>Mejorar playlist</button></div>
                    <div><img src={candadoOpen} alt="" className='iconsPlaylist' /></div>
                    <div><img src={share} alt="" className='iconsPlaylist' /></div>
                </section>
                <section className='timePlaylistSection'>
                    <div>
                        <p>00:00</p>
                    </div>
                    <div><img src={reloj} alt="" className='iconsPlaylist' /></div>
                </section>
            </section>
            <section className='addSongAlbumSection'>
                <section className='addSongSection'>
                    <div>
                        <img src={addIcon} alt="" className='iconsPlaylist' />
                    </div>
                    <div>
                        <p>Añadir cancion</p>
                    </div>
                </section>
                <section className='playPlaylistSection'>
                    <div>
                        <img src={shuffle} alt="" className='iconsPlaylist' />
                    </div>
                    <div>
                        <img src={playButton} alt="" className='playButton' />
                    </div>
                </section>

            </section>
            <section className='songsPlaylistSection'>
                <section className='listSongsPlaylist'>
                    <div>
                        <img src={album} alt="" className='playlistSongsIcons' />
                    </div>
                    <div>
                        <h5>Nombre cancion</h5>
                        <p>Nombre artista</p>
                    </div>
                    <div className='songOptionsIcon'>
                        <img src={tresPuntos} alt="" />
                    </div>
                </section>
                <section className='listSongsPlaylist'>
                    <div>
                        <img src={album} alt="" className='playlistSongsIcons' />
                    </div>
                    <div>
                        <h5>Nombre cancion</h5>
                        <p>Nombre artista</p>
                    </div>
                    <div className='songOptionsIcon'>
                        <img src={tresPuntos} alt="" />
                    </div>
                </section>
                <section className='listSongsPlaylist'>
                    <div>
                        <img src={album} alt="" className='playlistSongsIcons' />
                    </div>
                    <div>
                        <h5>Nombre cancion</h5>
                        <p>Nombre artista</p>
                    </div>
                    <div className='songOptionsIcon'>
                        <img src={tresPuntos} alt="" />
                    </div>
                </section>
                <section className='listSongsPlaylist'>
                    <div>
                        <img src={album} alt="" className='playlistSongsIcons' />
                    </div>
                    <div>
                        <h5>Nombre cancion</h5>
                        <p>Nombre artista</p>
                    </div>
                    <div className='songOptionsIcon'>
                        <img src={tresPuntos} alt="" />
                    </div>
                </section>
                <section className='listSongsPlaylist'>
                    <div>
                        <img src={album} alt="" className='playlistSongsIcons' />
                    </div>
                    <div>
                        <h5>Nombre cancion</h5>
                        <p>Nombre artista</p>
                    </div>
                    <div className='songOptionsIcon'>
                        <img src={tresPuntos} alt="" />
                    </div>
                </section>
                <section className='listSongsPlaylist'>
                    <div>
                        <img src={album} alt="" className='playlistSongsIcons' />
                    </div>
                    <div>
                        <h5>Nombre cancion</h5>
                        <p>Nombre artista</p>
                    </div>
                    <div className='songOptionsIcon'>
                        <img src={tresPuntos} alt="" />
                    </div>
                </section>
                <section className='listSongsPlaylist'>
                    <div>
                        <img src={album} alt="" className='playlistSongsIcons' />
                    </div>
                    <div>
                        <h5>Nombre cancion</h5>
                        <p>Nombre artista</p>
                    </div>
                    <div className='songOptionsIcon'>
                        <img src={tresPuntos} alt="" />
                    </div>
                </section>


            </section>

        </div>
    )
}

export default Playlists