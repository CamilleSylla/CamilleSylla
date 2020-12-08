import React from 'react';
import './Form.css';

export default function Form () {

    return (
            <div className="formInputs">
            <input type="text" placeholder="Nom"/>
            <input type="text" placeholder="Prénom"/>
            <input type="text" placeholder="Sujet"/>
            <input type="email" placeholder="email"/>
            <textarea type="text" placeholder="Votre projet"/>
            <button>Validé</button>
            </div>

    )
}