import React from 'react'
import '../Styles/ProfileConfig.css'
import { Link } from 'react-router-dom';
import leftArrow from '../src/assets/Vector.svg'
import line from '../src/assets/largedivider.svg'
function ProfileConfig() {
    return (
        <div className='containerProfileConfig '>
            <section >
                <section>
                    <Link to='/profile'><img src={leftArrow} alt="" className='arrow' /></Link>
                </section>
                <section className='headerText'>
                    <h4>Configuracion</h4>
                </section>


            </section>
            <section className='buttonSectionProfileConfig'>
                <button id='buttonConfig1'>Editar apariencia</button>
                <button id='buttonConfig2'>Editar perfil</button>
            </section>
            <section className='footerSectionProfileConfig'>
                <h4>Version: V1.25.03</h4>
                <img src={line} alt="" className='line' />
                <h4>Cerrar sesion</h4>
            </section>
        </div>

    )
}

export default ProfileConfig