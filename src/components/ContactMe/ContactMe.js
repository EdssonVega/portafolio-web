import React from "react";
import "./ContactMe.css"
import { useState } from "react";
import { useRef } from "react";
/*import emailjs from "@emailjs/browser";*/


function ContactMeSection () {

    const [contactDates, setContactDates] = useState({
        name:"",
        email:"",
        message:""
    });

    const [emptyInputs, setEmptyInputs] = useState(false)

    const form = useRef()

    const onSubmit = (e) =>{
        
        e.preventDefault();

        if(contactDates.name==="" || contactDates.email === "" || contactDates.message ===""){
            setEmptyInputs(true)
        }
    }
    console.log(contactDates)
    return(
        <section className="contactMeSection" id="contactMe">
            <form onSubmit={onSubmit} ref={form}>
                <h1 className="tituloForm">Contactame!</h1>
                <div className="inputContainer">
                    <input id="name" type="text" className="formInput" placeholder=" " onChange={(e)=> setContactDates({... contactDates, name: e.target.value})} value={contactDates.name}></input>
                    <label for="name"  className="formLabel">Nombre:</label>
                </div>
                <div className="inputContainer">
                    <input id="email" type="email" className="formInput" placeholder=" " onChange={(e)=> setContactDates({... contactDates, email: e.target.value})} value={contactDates.email}></input>
                    <label for="email" className="formLabel">Email:</label>
                </div>
                <div className="inputContainer">
                    <textarea id="message" className="formInput ta" placeholder=" " onChange={(e)=> setContactDates({... contactDates, message: e.target.value})} value={contactDates.message}></textarea>
                    <label for="message" className="formLabel">Mensaje:</label>
                </div>

                {emptyInputs == true && (
                <p className="emptyFields">Por favor rellene todos los campos</p>
            )}
                <button className="submit">
                    Enviar
                </button>
            </form>
            
        </section>
    )
}

export default ContactMeSection