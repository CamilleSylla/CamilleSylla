import React, { useEffect} from 'react'
import './Text.css'
import { gsap } from "gsap";
import CountUp from 'react-countup';

export default function TextBio () {

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
        gsap.from(".linkBtn", 1.2, {
            delay: 1.5,
            ease:"back",
            width: "0%",
            rotateX: 1800,
            color: "transparent",
            stagger: {
                amount:1
            }
        })
    })

    return (
        
        <div className="textContainer">
            <h3>0<CountUp
            start={100}
            end={3}>

            </CountUp></h3>
            <div className="textTitle">
            <span>B</span>
            <span>I</span>
            <span>O</span>
            
            </div>
            
            <p id="desc">Passionné de nouvelle technologies, j'ai toujours voulu faire de cette passion mon métier
                Ayant un esprit créatif je me suis naturellement tourner vers 
                le développement. Le web est pour moi l'une des plus grandes
                invention de l'être humain. J'ai voulu "contribué" a cette industrie
                et c'est la raison de spécialisation. Je suis donc motivé pour rejoindre 
                vos équipes de développement et vous aidé a baitir vos projet... 
            </p>
            <button className="linkBtn"> Me contacter</button>
        </div>
    )
}