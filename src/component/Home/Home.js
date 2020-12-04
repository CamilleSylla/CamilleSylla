import React, { Suspense, useEffect } from 'react'
import './Home.css'

import Text from './Text/Text'
import Title from './Title/Title'
import { gsap } from "gsap";
import { motion } from "framer-motion"



export default function Home() {
    const Comp =React.lazy(() => import ('./Scene/Scene'))
    const pageTransition = {
        ini: {
            y: 0,
            x: 0
        },
        out: {
            y: "100vh"
        },
        in: {
            x: "-100vw"
        }
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
        <motion.div  
        exit="out"
        initial="in" 
        animate="ini"
        variants={pageTransition}>
            <div className="appHome">
                <div className="layer">
                    <div className="homeGrid">
                        <Title />
                        <Text />
                        <div id="scene">
                        <Suspense fallback={<div>Loading...</div>}>
                            <Comp/>
                            </Suspense>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>


    )
}