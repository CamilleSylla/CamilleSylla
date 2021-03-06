import React, { useEffect, useRef } from 'react'
import { gsap } from "gsap";

export default function Title () {
    let line1 = useRef(null)
    let line2 = useRef(null)

    useEffect (()=> {
        gsap.from([line1, line2], 0.8, {
            delay:.3,
            esae: "power3.out",
            y: 300,
            stagger: {
                amount:0.15
            }
        })
    }, [line1, line2])


    return (
        
        <div className="titleContainer">
            <h2 ref={el => line1 = el}>Developpeur Web Polyvalent</h2>
            <h1 ref={el => line2 = el}>Camille Sylla</h1>
        </div>
    )
}