import React from "react";
import "./skill.css"

function SkillsCards({name,image}){
    return(
        <div className="container">
            <img src={image} alt={name} className="logoSkill"/>
            <div className="nameSkill">{name}</div>
        </div>
    )
}

export default SkillsCards