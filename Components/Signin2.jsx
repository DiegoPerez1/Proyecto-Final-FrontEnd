import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import leftArrow from '../src/assets/Vector.svg'
import '../Styles/Signin2.css'

function Signin2() {
    return (
        <div className='containerSignIn'>
            <section >
                <section>
                    <Link to='/signin'>  <img src={leftArrow} alt="" className='arrow' /></Link>
                </section>
                <section className='headerText'>
                    <p>Crear cuenta</p>
                </section>
            </section>
            <br />

            <section className='titleSectionSignIn'>
                <h2>Ingresa email, nombre de usuario y contraseña</h2>
            </section>
            <br />
            <form className='formSectionSignIn' >
                <section className='emailSection'>
                    <label htmlFor="">Correo electronico:</label>
                    <input className='inputLogIn' type="text" />
                </section>
                <section className='nameSectionSignIn'>
                    <label htmlFor="">Nombre de usuario:</label>
                    <input className='inputLogIn' type="text" />
                </section>
                <section className='passwordSectionSignIn'>
                    <label htmlFor="">Contraseña:</label>
                    <input className='inputLogIn' type="text" />
                    <p className='passVerification'>Debera contener al menos 8 caracteres</p>
                </section>
                <section className='checkBoxSignIn'>
                    <input type="checkbox" className='checkSignIn' /> <p>He leido y acepto los <a href="">Terminos</a> y <a href="">Condiciones</a> </p>
                </section>
                <section className='buttonSectionSignIn'>
                    <button className='buttonSignin '>Continuar</button>
                </section>
            </form>
        </div>

    )
}

export default Signin2