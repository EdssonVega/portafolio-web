import React from "react";
import ExperienceCards from "./experienceCards/experienceCards";
import "./Experience.css"
import foto1 from "../../images/fc1.PNG"
import foto2 from "../../images/fc2.PNG"
import foto3 from "../../images/fc3.PNG"
import foto4 from "../../images/fc4.PNG"


const experiences = [
    {
        Fecha:"Enero 2024 - Presente",
        Posicion: "Desarrollador Front End - AndeanUX",
        Descripcion: "Desarrollador en la empresa AndeanUX en el proyecto Fitness Club, proyecto creado usando tecnologia Next Js, el cual ayudará a los usuarios a tener una mejor experiencia y comodidad a la hora de elegir y suscribirse a un centro deportivo",
        f1:foto1,
        f2:foto2,
        f3:foto3,
        f4:foto4,
        Link:"https://www.fitnessclubpass.com"
    }
]



function ExperienceSection(){
    return(
        <section className="experienceSection" id="experience">
                <h1>EXPERIENCIA</h1>
                <div className="showExperiences">
                    {experiences.map((experience,index)=>(
                        <ExperienceCards date={experience.Fecha} position={experience.Posicion} positionDescription={experience.Descripcion} key={index} foto1={experience.f1} foto2={experience.f2} foto3={experience.f3} foto4={experience.f4} url={experience.Link}/>
                    )
                    )
                    }
                </div>
        </section>
    )
}

export default ExperienceSection