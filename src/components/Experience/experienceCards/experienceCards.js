import React from "react";
import "./experienceCards.css";
import { FaCalendarDays } from "react-icons/fa6";

function ExperienceCards ({date,position,positionDescription}){
    return(
        <div className="experienceCardContainer">
            <h3><FaCalendarDays />{date}</h3>
            <h2>{position}</h2>
            <p>{positionDescription}</p>
        </div>
    )
}

export default ExperienceCards