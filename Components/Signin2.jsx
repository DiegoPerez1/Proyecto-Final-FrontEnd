import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import leftArrow from '../src/assets/Vector.svg'
import '../Styles/Signin2.css'

export default class Signin2 extends Component {
    render() {
        const onSubmit = (data, e) => {
            e.preventDefault();
        }
        const [showHome, setShowHome] = useState(false)
        return (
            <div className='containerSignIn'>
                <section className='header'>
                    <Link to='/signin'>  <img src={leftArrow} alt="" className='arrow' /></Link>
                    <p>Crear cuenta</p>
                </section>
                <br />

                <section className='titleSectionSignIn'>
                    <h2>Ingresa email, nombre de usuario y contraseña</h2>
                </section>
                <br />
                <form className='formSectionSignIn' onSubmit={onSubmit}>
                    <section className='emailSection'>
                        <label htmlFor="">Correo electronico:</label>
                        <input className='input' type="text" />
                        <p>Deberias poder confirmarlo luego</p>

                    </section>
                    <section className='nameSectionSignIn'>
                        <label htmlFor="">Nombre de usuario:</label>
                        <input className='input' type="text" />
                    </section>
                    <section className='passwordSectionSignIn'>
                        <label htmlFor="">Contraaseña:</label>
                        <input className='input' type="text" />
                        <p>Debera contener al menos 8 caracteres</p>
                    </section>
                    <section className='checkBox'>
                        <input type="checkbox" className='checkSignIn' /> <p>He leido y acepto los Terminos y Condiciones</p>
                    </section>
                    <section className='buttonSectionSignIn'>
                        <button className='button'>Continuar</button>
                    </section>
                </form>
            </div>

        )
    }
}