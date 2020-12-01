import React, { useEffect }  from 'react';
import './Bio.css';
import Infos from './Infos/Infos';
import Scene from './Scene/Scene';
import TextBio from './Text/Text';
import BioTitle from './Title/Title';
import { gsap } from "gsap";

export default function Bio() {

    useEffect(() => {
        gsap.from("#scene2", 1.8, {
            delay: .5,
            opacity: 0,
            ease: "power3.out",
            stagger: {
                amount:0.15
            }
        })
    })
    return (
        <div className="appBio">
            <div className="bioContainer">
                <BioTitle />
                <div id="scene2">
                <Scene/>
                </div>
                <TextBio />
                <Infos />
            </div>
        </div>


    )
}