import React from 'react';
import './Form.css';

export default function Form () {
    return (
            <div className="formInputs">
                <form  action="https://formspree.io/f/mdopyrdp" method="POST" className="input-fields" >
            <input type="text" placeholder="Nom et Prénom" name="name"/>
            <input type="text" placeholder="Sujet" name="Subject"/>
            <input type="email" placeholder="email" name="mail"/>
            <textarea type="text" placeholder="Votre projet" name="msg"/>
            <button type="submit" className="form-btn" value="Envoyer" >Envoyer</button>
            </form>
            </div>

    )
}