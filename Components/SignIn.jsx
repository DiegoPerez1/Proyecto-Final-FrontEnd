import React, { Component } from 'react'
import '../Styles/SignIn.css'
import leftArrow from '../src/assets/Vector.svg'

export default class SignIn extends Component {
    render() {
        return (
            <div className='bg'>
                <section className='arrowSection'>
                    <img src={leftArrow} alt="" /> <p>Crear cuenta</p>
                </section>
                <br />
                <section>
                    <h2>¿Cual es tu correo electronico?</h2>
                </section>
                <br />
                <section>
                    <label htmlFor="">Correo electronico:</label>
                    <input className='input' type="text" />
                    <p>Deberias poder confirmarlo luego</p>
                </section>
            </div>
        )
    }
}
