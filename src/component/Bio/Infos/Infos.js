import React from 'react' ;
import './Infos.css';

import User from '../../../assets/user.svg'
import Cake from '../../../assets/cake.svg'
import Email from '../../../assets/email.svg'
import Name from '../../../assets/name.svg'

export default function Infos () {

    return (
        <div className="infosContainer">
            <img src={Name} alt="ID"/>
            <div className="infosItems">
                <img src={User} alt="User"/>
                <p>Camille Sylla (homme)</p>
            </div>
            <div className="infosItems">
                <img src={Cake} alt="Cake"/>
                <p>22/11/1996</p>
            </div>
            <div className="infosItems">
                <img src={Email} alt="Email"/>
                <p>camillesylla.web@gmail.com</p>
            </div>

        </div>
    )
}