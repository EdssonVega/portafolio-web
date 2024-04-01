import React from "react";
import "./projectsCards.css";
import { FaGithub } from "react-icons/fa";
import { TfiNewWindow } from "react-icons/tfi";
import example from "../../../images/programming.jpg"


function ProjectCards (){
    return(
        <div className="projectContainer">
            <img src={example} className="projectImage"/>
            <div className="projectText">
                <h2>Portafolio</h2>
                <p>Portafolio personal creado con React</p>
            </div>
            <div className="projectButtons">
                <button className="toGitCode">Code <FaGithub /></button>
                <button className="toHost">Demo <TfiNewWindow /></button>
            </div>
        </div>
    )
}

export default ProjectCards