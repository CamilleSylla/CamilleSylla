import React from 'react';
import './Contact.css';
import Form from './Form/Form';
import TitleContact from './Title/Title';

export default function Contact () {

    return (
        <div className="contactContainer">
            <div className="contactGrid">
                <TitleContact/>
                <Form/>
            </div>
        </div>
    )
}