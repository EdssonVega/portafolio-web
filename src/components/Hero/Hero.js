import React from "react";
import "./Hero.css";
import foto from "../../images/Imagen2.png"
import { GrLinkedin } from "react-icons/gr"
import { FaGithubSquare } from "react-icons/fa"



function HeroSection(){
    return(
        <section className="hero">
            <div className="titulo">
                <h1 className="name">EDSSON VEGA</h1>
                <h2 className="position">DESARROLLADOR FRONT END</h2>
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