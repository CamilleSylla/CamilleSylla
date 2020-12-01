import React, { useEffect } from 'react'
import './Home.css'
import Scene from './Scene/Scene'
import Text from './Text/Text'
import Title from './Title/Title'
import { gsap } from "gsap";

export default function Home() {

    useEffect(() => {
        gsap.from("#scene", 1.8, {
            x: 1000,
            opacity: 0,
            ease: "power3.out",
            stagger: {
                amount:0.15
            }
        })
    })
    return (
        <div className="appHome">
            <div className="homeGrid">
                <Title />
                <Text />
                <div id="scene">
                    <Scene />
                </div>
            </div>
        </div>

    )
}