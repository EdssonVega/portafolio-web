import React from "react";
import "./AboutMe.css";
import comp from "../../images/undraw_programming_re_kg9v.svg";
import logo from '../../images/logo.svg';
import cod from "../../images/undraw_code_inspection_bdl7.svg";




function AboutMeSection(){
    return(
        <section className="hero">
            <div className="titulo">
                <h1>HOLA! ME LLAMO <br/> <span className="name">EDSSON VEGA</span><br/> Y SOY UN DESARROLLADOR<br/><span className="name"> FRONT END</span></h1>
            </div>
            <div className="svgContainer">
                <img src={logo} className="svg1"/>
                <img src={comp} className="svg2"/>
                <img src={cod} className="svg3"/>
            </div>
        </section>
    )
}

export default AboutMeSection