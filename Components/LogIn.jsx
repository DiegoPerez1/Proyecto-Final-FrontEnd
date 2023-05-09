import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import leftArrow from '../src/assets/Vector.svg'
import '../Styles/Login.css'

export default class LogIn extends Component {
    render() {
        return (
            <div className='ContainerLogIn'>
                <section className='headerLogIn'>
                    <Link to='/'>  <img src={leftArrow} alt="" className='arrow' /></Link>
                    <p>Iniciar sesion</p>
                </section>
                <br />
                <form className='formSectionLogIn'>
                    <section className='titleSectionLogIn'>
                        <h3>Nombre de usuario o E-mail</h3>
                        <input className='input' type="text" />
                    </section>
                    <br />
                    <section>
                        <label htmlFor="">Contraseña:</label>
                        <input className='input' type="text" />
                    </section>
                    <section className='buttonSectionLogIn'>
                        <button className='button'>Iniciar sesion</button>
                    </section>
                </form>
            </div>

        )
    }
}
