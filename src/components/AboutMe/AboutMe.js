import React from "react";
import "./AboutMe.css";
import foto from "../../images/edsson.jpg"
import { HiOutlineDocumentArrowDown } from "react-icons/hi2";

function AboutMeSection (){
    return(
        <section className="AboutMeSection">
            <div className="descripcion">
                <h1>ACERCA DE MI</h1>
                <p>Soy un apasionado por la ciencia y la tecnología, siempre me emocionó descubrir como funcionan las cosas así que disfruto de aprender algo nuevo cada día. <br/>¿Qué te puedo decir? Ando dando mis primeros pasos en este mundo digital y me intriga saber toda la caminata que me espera.<br/>Hey! pero no te creas que soy un aburrido que solo habla de estudios y trabajo, si me invitas a ver una peli al cine, a nadar a la piscina o echarle una partida a un videojuego con gusto aceptaré!<br/> Total! La vida es un equilibrio entre los deberes y placeres. </p>
                <button className="resumeButton"><a><HiOutlineDocumentArrowDown className="hoja"/>HOJA DE VIDA (CV)</a></button>
            </div>
            <img src={foto} className="foto"/>
        </section>
    )
}

export default AboutMeSection