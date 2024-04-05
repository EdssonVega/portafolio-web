import React from "react";
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import Logotipo from "../logotipo/logotipo";


function NavbarSection (){

    const [BurguerMenu, setBurguerMenu] = useState(false)

    const burguerSwitch = () => {
        console.log(BurguerMenu)
        setBurguerMenu(!BurguerMenu)
    }

    return(
        <header>
            <div className="logoCont">
                <Logotipo />
            </div>
            <GiHamburgerMenu className="toggle" onClick={burguerSwitch} />
            <div className={`buttonsContainer ${BurguerMenu==true?"display":""}`}>
                <a className="navbarEnlaces"><div className="buttonsNav">Acerca de mi</div></a>
                <a className="navbarEnlaces"><div className="buttonsNav">Proyectos</div></a>
                <a className="navbarEnlaces"><div className="buttonsNav">Contáctame</div></a>
            </div>
        </header>
    )
}

export default NavbarSection