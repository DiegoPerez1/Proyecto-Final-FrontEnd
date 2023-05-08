import React from 'react'
import profilePic from '../src/assets/ProfilePic.png'
import '../Styles/Profile.css'
import config from '../src/assets/config.svg'

export default function Profile() {
    return (
        <div className='containerProfile'>
            <section className='piccSection'>
                <img src={profilePic} alt="" />
                <img src={config} alt="" />
            </section>
            <section>
                title
            </section>
            <section>
                Mis playlist
            </section>
            <section>Albums</section>
        </div>
    )
}
