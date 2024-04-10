import React from "react";
import "./experienceCards.css";
import { FaCalendarDays } from "react-icons/fa6";

function ExperienceCards ({date,position,positionDescription,foto1,foto2,foto3,foto4,url}){
    return(
        <div className="experienceCardContainer">
            <h3><FaCalendarDays />{date}</h3>
            <h2>{position}</h2>
            <p>{positionDescription}</p>
            <div className="experiencePhotosContainer">
                <a href={url} target="_blank" className="enlace"><img src={foto1} /></a>
                <a href={url} target="_blank" className="enlace"><img src={foto2} /></a>
                <a href={url} target="_blank" className="enlace"><img src={foto3} /></a>
                <a href={url} target="_blank" className="enlace"><img src={foto4} /></a>
            </div>
        </div>
    )
}

export default ExperienceCards