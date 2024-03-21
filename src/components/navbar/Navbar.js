import React from "react";
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";


function NavbarSection (){

    const [BurguerMenu, setBurguerMenu] = useState(false)

    const burguerSwitch = () => {
        console.log(BurguerMenu)
        setBurguerMenu(!BurguerMenu)
    }

    return(
        <header>
            <div>
                logotipo
            </div>
            <GiHamburgerMenu className="toggle" onClick={burguerSwitch} />
            <div className={`buttonsContainer ${BurguerMenu==true?"display":""}`}>
                <button className="navbarButtons"><a className="navbarEnlaces">Acerca de mi</a></button>
                <button className="navbarButtons"><a className="navbarEnlaces">Proyectos</a></button>
                <button className="navbarButtons"><a className="navbarEnlaces">Contáctame</a></button>
            </div>
        </header>
    )
}

export default NavbarSection