import React from "react";
import "./AboutMe.css";
import foto from "../../images/edsson.jpg"
import { HiOutlineDocumentArrowDown } from "react-icons/hi2";
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
        Logo:html
    },
    {
        Name:"CSS3",
        Logo:css
    },
    {
        Name:"JAVASCRIPT",
        Logo:javascript
    },
    {
        Name:"REACT",
        Logo:react
    },
    {
        Name:"JIRA",
        Logo:jira
    },
    {
        Name:"GIT",
        Logo:git
    }
]


function AboutMeSection (){
    return(
        <section className="AboutMeSection">
            <div className="descricionContainer">
                <div className="descripcion">
                    <h1>ACERCA DE MI</h1>
                    <p>Soy un apasionado por la ciencia y la tecnología, siempre me emocionó descubrir como funcionan las cosas así que disfruto de aprender algo nuevo cada día. <br/>¿Qué te puedo decir? Ando dando mis primeros pasos en este mundo digital y me intriga saber toda la caminata que me espera.<br/>Hey! pero no te creas que soy un aburrido que solo habla de estudios y trabajo, si me invitas a ver una peli al cine, a nadar a la piscina o echarle una partida a un videojuego con gusto aceptaré!<br/> Total! La vida es un equilibrio entre los deberes y placeres. </p>
                    <button className="resumeButton"><a><HiOutlineDocumentArrowDown className="hoja"/>HOJA DE VIDA (CV)</a></button>
                </div>
                <img src={foto} className="foto"/>
            </div>
            <div className="skillsSection">
                <h1>HABILIDADES</h1>
                <div className="skills">
                    {Skills.map((Skill,index)=>(
                        <SkillsCards name={Skill.Name} image={Skill.Logo} key={index}/>
                    )
                    )
                    }
                </div>
            </div>
        </section>    
    )
}

export default AboutMeSection