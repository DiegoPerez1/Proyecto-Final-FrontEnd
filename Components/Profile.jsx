import React from 'react'
import profilePic from '../src/assets/ProfilePic.png'
import '../Styles/Profile.css'
import { Link } from 'react-router-dom';
import config from '../src/assets/config.svg'
import line from '../src/assets/divider.svg'
import album from '../src/assets/albumImg.png'

export default function Profile() {
    return (
        <div className='containerProfile'>
            <section className='piccSection'>
                <img src={profilePic} alt="" />
                <div className='configProfile'>
                    <Link to={'/profile-config'}><img src={config} alt="" /></Link>
                </div>
            </section>
            <section>
                <h3>Mara Perez</h3>
                <p>@mara_pg</p>
            </section>
            <section className='buttonSectionProfile'>
                <h5>Mis playlist</h5>
                <img src={line} alt="" className='line' />
                <button className='buttonProfile'>Crear playlist</button>
            </section>
            <section className='playlistSectionProfile'>
                <ul className='playlistProfile'>
                    <img src={album} alt="" />
                    <img src={album} alt="" />
                    <img src={album} alt="" />
                    <img src={album} alt="" />
                    <img src={album} alt="" />
                    <img src={album} alt="" />
                    <img src={album} alt="" />
                </ul>
            </section>
        </div>
    )
}
