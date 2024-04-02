import React from "react";
import "./Hero.css";
import foto from "../../images/Imagen2.png"
import { GrLinkedin } from "react-icons/gr"
import { FaGithubSquare } from "react-icons/fa"
import { GrDocumentDownload } from "react-icons/gr"




function HeroSection(){
    return(
        <section className="hero">
            <div className="titulo">
                <h2 className="position">¡Hola! Me llamo</h2>
                <h1 className="name">EDSSON VEGA</h1>
                <h2 className="position">Desarrollador Front End</h2>
                <button className="resumeButton">
                        <GrDocumentDownload className="hoja"/>HOJA DE VIDA (CV)
                </button>
                <div className="socialMediaIcons">
                    <GrLinkedin className="linkedInIcon"/>
                    <FaGithubSquare className="githubIcon"/>   
                </div>
            </div>
            <div>
                <img src={foto} className="foto"/>
            </div>
        </section>
    )
}

export default HeroSection