import React from "react";
import ExperienceCards from "./experienceCards/experienceCards";
import "./Experience.css"

const experiences = [
    {
        Fecha:"2024-",
        Posicion: "Desarrollador Front-End",
        Descripcion: "Pasante en la empresa AndeanUX S.R.L. ayudando en el proyecto Fitness Club usando la tecnologia Next Js"
    }
]



function ExperienceSection(){
    return(
        <section className="experienceSection" id="experience">
                <h1>EXPERIENCIA</h1>
                <div className="showExperiences">
                    {experiences.map((experience,index)=>(
                        <ExperienceCards date={experience.Fecha} position={experience.Posicion} positionDescription={experience.Descripcion} key={index}/>
                    )
                    )
                    }
                </div>
        </section>
    )
}

export default ExperienceSection