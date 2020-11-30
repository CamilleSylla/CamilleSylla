import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

import './Title.css'

export default function BioTitle () {
    let line1 = useRef(null)
    let line2 = useRef(null)


    useEffect (()=> {
        gsap.registerPlugin(ScrollTrigger)

        gsap.from([line1, line2], 0.8, {
            scrollTrigger:{
                trigger: ".titleBioContainer",
                toggleActions:'restart none none reset',
                start: "20px 80%",
            },
            delay:.3,
            esae: "power3.out",
            y: 300,
            stagger: {
                amount:0.15
            }
        })
    }, [line1, line2])
    return (
        <div className="titleBioContainer">
            <h2 ref={el => line1 = el}>A votre</h2>
            <h1 ref={el => line2 = el}>Disposition</h1>
        </div>
    )
}