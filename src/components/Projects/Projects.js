import React from "react";
import "./Project.css"
import ProjectCards from "./projectsCards/projectsCards";

const projects = [

]


function ProjectSection(){
    return(
        <section className="projectsSection">
                <h1>PROYECTOS</h1>
                <div className="showProjects">
                    <ProjectCards />
                    <ProjectCards />
                    <ProjectCards />
                    <ProjectCards />
                </div>
        </section>
    )
}

export default ProjectSection