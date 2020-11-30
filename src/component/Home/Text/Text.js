import React, { useEffect, useRef } from 'react'
import './Text.css'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

export default function Text () {

    return (
        
        <div className="textContainer">
            <h3>01</h3>
            <div className="textTitle">
            <span>D</span>
            <span>o</span>
            <span>n</span>
            <span>n</span>
            <span>e</span>
            <span>r</span>
            <span>&nbsp;</span>
            <span>v</span>
            <span>i</span>
            <span>e</span>
            <span>&nbsp;</span>
            <span>à</span>
            <span>&nbsp;</span>
            <span>v</span>
            <span>o</span>
            <span>s</span>
            <span>&nbsp;</span>
            <span>i</span>
            <span>D</span>
            <span>é</span>
            <span>e</span>
            <span>s</span>
            </div>
            
            <p >Bonjour, Je m'appelle Camille Sylla.
                 Je suis un developpeur utilisant ayant pour stack favoris le " MERN (MongoDB, Express.js, React.js et Node.js) Stack". Je suis developpeur freelance pouvant intervenir dans les region des Haut-de-France, Ile de France et Grand-Ouest mais aussi en remote si vous n'avez pas ou pas encore de locaux.</p>
            <button> Ma Bio</button>
        </div>
    )
}