import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import '../Styles/SignIn.css'
import leftArrow from '../src/assets/Vector.svg'

function SignIn() {

    return (
        <div className='containerSignIn'>
            <section >
                <section className='headerArrow'>
                    <Link to='/'>  <img src={leftArrow} alt="" className='arrowSignIn' /></Link>
                </section>
                <section className='headerText'>
                    <p>Crear cuenta</p>
                </section>
            </section>
            <section className='titleSectionSignin'>
                <h2>¿Cual es tu correo electronico?</h2>
            </section>
            <form className='formSectionSignin'>
                <label htmlFor="" className='emailLabel'>Correo electronico:</label>
                <input className='inputSingiin' type="text" />
                <p className='confirmationLogIn'>Deberias poder confirmarlo luego</p>
            </form>
            <section className='buttonSectionSignin'>
                <Link to='/signin-2'><button className='buttonSignin'>Continuar</button></Link>
            </section>
        </div>
    )
}
export default SignIn
