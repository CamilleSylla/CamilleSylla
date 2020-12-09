import React from 'react';
import './Form.css';
import emailjs from 'emailjs-com'

export default function Form () {
    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('gmail', 'template_a0yhol6', e.target, 'user_9Mwl1WzLHnTGVe4ZXHEMI')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
      }
    return (
            <div className="formInputs">
                <form className="input-fields" onSubmit={sendEmail} >
            <input type="text" placeholder="Nom et Prénom" name="name"/>
            <input type="text" placeholder="Sujet" name="Subject"/>
            <input type="email" placeholder="email" name="mail"/>
            <textarea type="text" placeholder="Votre projet" name="msg"/>
            <button type="submit" className="form-btn" value="Envoyer" >Envoyer</button>
            </form>
            </div>

    )
}