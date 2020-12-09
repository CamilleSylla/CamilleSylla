import React, { useEffect} from 'react'
import './Text.css'
import { gsap } from "gsap";
import CountUp from 'react-countup';
import { Link } from 'react-router-dom';

export default function Text () {
    

    useEffect(() => {
        gsap.from(".textContainer", 1.2, {
            delay:.3,
            ease: "power3.out",
            color: "transparent",
            stagger: {
                amount:1
            }
        })
        gsap.from("#desc", 1.2, {
            delay:.3,
            ease: "power3.out",
            x: -1000,
            height: 50,
            stagger: {
                amount:1
            }
        })
    })
    return (
        
        
        <div className="textContainer">
            
            <h3>0<CountUp
            start={9}
            end={1}>

            </CountUp></h3>
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
            
            <p id="desc">Bonjour, Je m'appelle Camille Sylla, développeur utilisant principalement le " MERN (MongoDb, Express Js, React js et Node js) Stack". Je suis un freelance pouvant intervenir dans les régions des Haut-de-France, Île de France et Grand Ouest mais aussi en remote.</p>
            <Link to="/bio">Ma Bio</Link>
            
        </div>
    )
}