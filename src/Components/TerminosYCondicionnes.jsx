import React from 'react'
import { Link } from "react-router-dom";
import leftArrow from '../assets/Vector.svg'
import '../Styles/TerminosYCondiciones.css'
function TerminosYCondicionnes() {
    return (

        <div id='top-container-recuperarCuenta' className='containerTERMyCONDI' >
            <section className='mainContainer'>
                <section className='headerArrowTERMIN'>
                    <Link to='/signin-2'>  <img src={leftArrow} alt="" /></Link>
                    <h1>Términos y Condiciones de Uso</h1>
                </section>
                <div> <h2>Aceptación de los Términos</h2>
                    <p>Por favor, lee estos términos y condiciones cuidadosamente antes de usar la aplicación Aund. Al utilizar la aplicación, aceptas
                        cumplir con estos términos y condiciones. Si no estás de acuerdo con alguno de los términos establecidos aquí, por favor, no
                        utilices la aplicación.</p></div>
                <div><h2>Uso de la Aplicación</h2>
                    <p>Aund es una aplicación de música diseñada para permitir a los usuarios descubrir, reproducir y compartir música. El uso de la
                        aplicación está sujeto a las siguientes restricciones:</p>
                    <ul>
                        <li>No podrás utilizar la aplicación para fines ilegales o no autorizados.</li>
                        <li>No podrás modificar, adaptar o piratear la aplicación.</li>
                        <li>No podrás transmitir ningún tipo de virus, gusano o cualquier otro código de naturaleza destructiva.</li>
                        <li>No podrás utilizar la aplicación de manera que pueda dañar, desactivar, sobrecargar o afectar negativamente los servidores o
                            redes de Aund.</li>
                    </ul></div>
                <div><h2>Propiedad Intelectual</h2>
                    <p>La aplicación Aund y todo su contenido, incluyendo pero no limitado a logotipos, nombres, marcas, gráficos y textos, son propiedad
                        exclusiva de Aund y están protegidos por las leyes de derechos de autor y otras leyes de propiedad intelectual.</p>
                </div>
                <div> <h2>Limitación de Responsabilidad</h2>
                    <p>Aund no se hace responsable de ningún daño directo, indirecto, incidental, especial, consecuencial o ejemplar que pueda surgir
                        debido al uso o la imposibilidad de uso de la aplicación.</p></div>
                <div><h2>Modificaciones</h2>
                    <p>Aund se reserva el derecho de modificar o reemplazar cualquier parte de estos términos y condiciones en cualquier momento. Es tu
                        responsabilidad revisar periódicamente estos términos y condiciones para estar al tanto de las modificaciones.</p></div>
                <div> <h2>Contacto</h2>
                    <p>Si tienes alguna pregunta o inquietud acerca de estos términos y condiciones, puedes contactarnos a través de nuestro sitio web o
                        por correo electrónico a info@aundapp.com.</p></div>
            </section>
        </div>
    )
}

export default TerminosYCondicionnes