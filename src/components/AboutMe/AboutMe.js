import React from "react";
import "./AboutMe.css";
import { GrDocumentDownload } from "react-icons/gr"
import SkillsCards from "./skill/skill";
import html from "../../images/html-5.svg"
import css from "../../images/css-3.svg"
import javascript from "../../images/javascript.svg"
import react from "../../images/react.svg"
import jira from "../../images/jira.svg"
import git from "../../images/git-icon.svg"




const Skills = [
    {
        Name:"HTML5",
        Logo:html,
        Nivel:"AVANZADO"
    },
    {
        Name:"CSS3",
        Logo:css,
        Nivel:"AVANZADO"
    },
    {
        Name:"JAVASCRIPT",
        Logo:javascript,
        Nivel:"AVANZADO"
    },
    {
        Name:"REACT",
        Logo:react,
        Nivel:"MEDIO"
    },
    {
        Name:"JIRA",
        Logo:jira,
        Nivel:"MEDIO"
    },
    {
        Name:"GIT",
        Logo:git,
        Nivel:"AVANZADO"
    }
]


function AboutMeSection (){
    return(
        <section className="AboutMeSection">
            <h1>ACERCA DE MI</h1>
            <div className="aboutMeContainer">
                <div className="descripcion">
                    <p>Soy un apasionado por la ciencia y la tecnología, siempre me emocionó descubrir como funcionan las cosas así que disfruto de aprender algo nuevo cada día. <br/>¿Qué te puedo decir? Ando dando mis primeros pasos en este mundo digital y me intriga saber toda la caminata que me espera.<br/>Hey! pero no te creas que soy un aburrido que solo habla de estudios y trabajo, si me invitas a ver una peli al cine, a nadar a la piscina o echarle una partida a un videojuego con gusto aceptaré!<br/> Total! La vida es un equilibrio entre los deberes y placeres. </p>
                    <button className="resumeButton">
                        <GrDocumentDownload className="hoja"/>HOJA DE VIDA (CV)
                    </button>
                </div>
                <div className="skillsSection" >
                    <h2>Habilidades:</h2>
                    <div className="skillsReal">
                    {Skills.map((Skill,index)=>(
                        <SkillsCards name={Skill.Name} image={Skill.Logo} nivel={Skill.Nivel} key={index}/>
                    )
                    )
                    }
                    </div>
                </div>
            </div>
        </section>    
    )
}

export default AboutMeSection