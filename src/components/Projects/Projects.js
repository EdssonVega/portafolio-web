import React from "react";
import "./Project.css"
import ProjectCards from "./projectsCards/projectsCards";
import portafolioFoto from "../../images/portafolio.PNG"
import matricesFoto from "../../images/matrices.PNG"

const projects = [
    {
      Title:"Portafolio",
      Description:"Portafolio personal creado con React" , 
      Image:portafolioFoto,
      ToGithub:"https://github.com/EdssonVega/portafolio-web",
      ToPage:"https://evtportfolio.netlify.app"
    },
    {
      Title:"Operación de matrices",
      Description:"Una pequeña app que te hace cálculos matriciales creado con React" , 
      Image:matricesFoto,
      ToGithub:"https://github.com/EdssonVega/calculo-de-matrices",
      ToPage:"https://calculodematrices.netlify.app/"
    }
]


function ProjectSection(){
    return(
        <section className="projectsSection" id="projects">
                <h1>PROYECTOS</h1>
                <div className="showProjects">
                    {projects.map((project,index)=>(
                        <ProjectCards title={project.Title} description={project.Description} image={project.Image} toGithub={project.ToGithub} toPage={project.ToPage} key={index}/>
                    ))}
                </div>
        </section>
    )
}

export default ProjectSection