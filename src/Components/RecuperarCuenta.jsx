import '../Styles/SignIn.css'
import { Link } from 'react-router-dom';
import leftArrow from '../assets/Vector.svg'
import '../Styles/RecuperarCuenta.css'
import React, { useState } from 'react';


const Modal = ({ message, closeModal }) => (
    <div className="modal">
        <div className="modalContent">
            <h2>{message}</h2>
            <Link to={'/login'}><button className='modalButton' onClick={closeModal}>Entendido</button></Link>
        </div>
    </div>
);

function SignIn() {
    const [email, setEmail] = useState('');
    const [habilitarBoton, setHabilitarBoton] = useState(false);


    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };
    const handleEmail = (event) => {
        setEmail(event.target.value);
        verificarCamposCompletos();
    };



    const verificarCamposCompletos = () => {
        if (email !== '') {
            setHabilitarBoton(true);
        } else {
            setHabilitarBoton(false);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    };
    return (
        <div id='top-container-recuperarCuenta' className={`containerSignIn  ${showModal ? 'modalOpen' : ''}`}>
            <section >
                <section className='headerArrow'>
                    <Link to='/login'>  <img src={leftArrow} alt="" className='arrowSignIn' /></Link>
                </section>
                <section className='headerText'>
                    <p>Recuperar Cuenta</p>
                </section>
            </section>

            <form className='formSectionSignin' onSubmit={handleSubmit}>
                <label htmlFor="" className='emailLabel'>Nombre de Usuario o E-mail:</label>
                <input className='inputSingiin' type="text" onChange={handleEmail} />
                {showModal && (
                    <Modal message="Se ha enviado un mensaje a su correo" closeModal={closeModal} />
                )}
                <p className='confirmationLogIn'>Deberias poder ingresar al e-mail de la cuenta para poder recuperarla</p>

                <section className='buttonSectionSignin'>
                    <button type="submit" disabled={!habilitarBoton} onClick={openModal} className={habilitarBoton ? 'activo' : 'inactivo'}>Continuar</button>

                </section>
            </form>
        </div>
    )
    console.log(habilitarBoton)
}
export default SignIn