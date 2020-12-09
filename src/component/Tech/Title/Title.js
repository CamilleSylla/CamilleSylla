import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

export default function TechTitle () {
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
            ease: "power3.out",
            y: 300,
            stagger: {
                amount:0.15
            }
        })
    }, [line1, line2])
    return (
        <div className="titleBioContainer">
            <h2 ref={el => line1 = el}>Arbre de</h2>
            <h1 ref={el => line2 = el}>Compétences</h1>
        </div>
    )
}