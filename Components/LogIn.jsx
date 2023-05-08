import React, { Component } from 'react'
import leftArrow from '../src/assets/Vector.svg'
import '../Styles/Login.css'

export default class LogIn extends Component {
    render() {
        return (
            <div className='ContainerLogIn'>
                <section className='header'>
                    <img src={leftArrow} alt="" className='arrow' /><p>Crear cuenta</p>
                </section>
                <br />
                <section>
                    <h2>Ingresa un nombre de usuario y una contraseña</h2>
                </section>
                <br />
                <section>
                    <label htmlFor="">Nombre de usuario:</label>
                    <input className='input' type="text" />
                </section>
                <section>
                    <label htmlFor="">Contraaseña:</label>
                    <input className='input' type="text" />
                    <p>Debera contener al menos 8 caracteres</p>
                </section>
                <section className='checkBox'>
                    <input type="checkbox" className='checkLogin' /> <p>He leido y acepto los Terminos y Condiciones</p>
                </section>
                <section className='buttonSection'>
                    <button className='button'>Continuar</button>
                </section>
            </div>

        )
    }
}
