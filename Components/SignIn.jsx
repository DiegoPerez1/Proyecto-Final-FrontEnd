import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import '../Styles/SignIn.css'
import leftArrow from '../src/assets/Vector.svg'

export default class SignIn extends Component {
    render() {
        return (
            <div className='containerSignIn'>
                <section className='header'>
                    <Link to='/'>  <img src={leftArrow} alt="" className='arrow' /></Link><p>Crear cuenta</p>
                </section>
                <br />
                <section className='titleSectionSignin'>
                    <h2>¿Cual es tu correo electronico?</h2>
                </section>
                <br />
                <form className='formSectionSignin'>
                    <section>
                        <label htmlFor="">Correo electronico:</label>
                        <input className='input' type="text" />
                        <p>Deberias poder confirmarlo luego</p>
                    </section>
                </form>
                <section className='buttonSectionSignin'>
                    <Link to='/signin-2'><button className='buttonSignin'>Continuar</button></Link>
                </section>

            </div>
        )
    }
}
