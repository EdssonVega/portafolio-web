import React from "react";
import "./ContactMe.css"

function ContactMeSection () {
    return(
        <section className="contactMeSection">
            <form>
                <h1 className="tituloForm">Contactame!</h1>
                <div className="inputContainer">
                    <input id="name" type="text" className="formInput" placeholder=" "></input>
                    <label for="name"  className="formLabel">Nombre:</label>
                </div>
                <div className="inputContainer">
                    <input id="email" type="email" className="formInput" placeholder=" "></input>
                    <label for="email" className="formLabel">Email:</label>
                </div>
                <div className="inputContainer">
                    <textarea id="message" className="formInput ta" placeholder=" "></textarea>
                    <label for="message" className="formLabel">Mensaje:</label>
                </div>
                <button className="submit">
                    Enviar
                </button>
            </form>
        </section>
    )
}

export default ContactMeSection