
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import Cards from './Cards/Cards';
import './Tech.css';
import TechTitle from './Title/Title';

export default function Tech() {
    const [stack, setStack] = useState({
        stack: ""
    })

    const StackClick = (e) => {
        setStack({ ...stack, stack: e.target.value })
    }

    const pageVariant = {
        ini: {
            y: 0,
            x: 0
        },
        out: {
            x: "100vw"
        },
        in: {
            y: "-100vh"
        }

    }
    const pageTransition = {
        type: "tween",
        ease:"anticipate",
        duration: .5
    }

    return (
        <motion.div
            exit="out"
            initial="in"
            animate="ini"
            variants={pageVariant}
            transition={pageTransition}>
            <div className="appTech">
                <div className="layer">
                    <TechTitle />
                    <div className="stackMenu">
                        <button onClick={StackClick} id="front" value="front">Front-End</button>
                        <button onClick={StackClick} id="back" value="back">Back-End</button>
                        <button onClick={StackClick} id="cms" value="cms">CMS</button>
                    </div>
                    <Cards stack={stack} />
                </div>
            </div>
        </motion.div>
    )
}