import React, { Suspense, useEffect } from 'react'
import './Home.css'

import Text from './Text/Text'
import Title from './Title/Title'
import { gsap } from "gsap";
import { motion } from "framer-motion"
import Dev from '../../assets/dev.svg'


export default function Home() {
    const Comp = React.lazy(() => import('./Scene/Scene'))
    const pageVariant = {
        ini: {
            y: 0,
            x: 0,
            opacity: 1
        },
        out: {
            y: "100vh"
        },
        in: {
            opacity: 0
        }
    }
    const pageTransition = {
        type: "tween",
        ease:"anticipate",
        duration: .5

    }
    const pageStyle = {
        pposition: "absolute"
    }
    useEffect(() => {
        gsap.from("#scene", 1.8, {
            x: 1000,
            opacity: 0,
            ease: "power3.out",
            stagger: {
                amount: 0.15
            }
        })
    })
    return (
        <Suspense fallback={<div>Loading...</div>}>
        <motion.div
            exit="out"
            initial="in"
            animate="ini"
            variants={pageVariant}
            transition={pageTransition}
            style={pageStyle}>
            <div className="appHome">
                <div className="layer">
                    <div className="homeGrid">
                        <Title />
                        <Text />
                        <div id="scene">
                            <img src={Dev} alt="dev"/>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
        </Suspense>


    )
}