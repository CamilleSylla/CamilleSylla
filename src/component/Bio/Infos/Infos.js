import React , { useEffect } from 'react';
import './Infos.css';
import User from '../../../assets/user.svg'
import Cake from '../../../assets/cake.svg'
import Email from '../../../assets/email.svg'
import Name from '../../../assets/name.svg'
import { gsap } from "gsap";

export default function Infos() {

    useEffect(() => {
        gsap.from(".infosImg", 0.8, {
            delay: .8,
            opacity: 0
        })
        gsap.from(".infosDesc", 0.8, {
            delay: 1.6,
            x: 2000
        })
    })

    return (
        <div className="infosContainer">
            <div className="infosStuff">
                <div className="infosItems">
                    <img className="infosImg" src={User} alt="User" />
                    <p className="infosDesc">Camille Sylla (homme)</p>
                </div>
                <div className="infosItems">
                    <img className="infosImg" src={Cake} alt="Cake" />
                    <p className="infosDesc">22/11/1996</p>
                </div>
                <div className="infosItems">
                    <img className="infosImg" src={Email} alt="Email" />
                    <p className="infosDesc">camillesylla.web@gmail.com</p>
                </div>
            </div>
        </div>
    )
}