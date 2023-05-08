import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import leftArrow from '../src/assets/Vector.svg'
import '../Styles/Login.css'

export default class LogIn extends Component {
    render() {
        return (
            <div className='ContainerLogIn'>
                <section className='header'>
                    <Link to='/'>  <img src={leftArrow} alt="" className='arrow' /></Link>
                    <p>Iniciar sesion</p>
                </section>
                <br />
                <section className='titleSection'>
                    <h2>Nombre de usuario o E-mail</h2>
                    <input className='input' type="text" />
                </section>
                <br />
                <form className='formSection'>
                    <section>
                        <label htmlFor="">Contraseña:</label>
                        <input className='input' type="text" />
                    </section>
                    <section className='buttonSection'>
                        <button className='button'>Iniciar sesion</button>
                    </section>
                </form>
            </div>

        )
    }
}
