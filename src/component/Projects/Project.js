import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import Cards from './Cards/Cards';
import './Project.css';
import Title from './Title/Title';

import Arr from '../../assets/Rarrow.svg';

export default function Project() {
    const [project, setProject] = useState({ id: "1" })

    const pageVariant = {
        ini: {
            y: 0,
            x: 0,
        },
        out: {
            x: "-100vw"
        },
        in: {
            y: "100vh"
        }
    }
    const pageTransition = {
        type: "tween",
        ease: "anticipate",
        duration: .5
    }
    const add = () => {
        let acc = Number(project.id)
        setProject({...project, id: `${acc += 1}`})
        console.log(project);
    }
    const minus = () => {
        let acc = Number(project.id)
        setProject({...project, id: `${acc -= 1}`})
        console.log(project);
    }
   

    return (
        <motion.div
            exit="out"
            initial="in"
            animate="ini"
            variants={pageVariant}
            transition={pageTransition}
        >
            <div className="projectContainer">
                <div className="layer">
                    <Title />
                    <Cards project={project} />
                    <div className="selector">
                        <div id="arrLeft" onClick={minus}>
                            <img src={Arr} alt="left" />
                            <p>Projet précedent</p>
                        </div>
                        <div id="arrRight" onClick={add}>
                            <p>Projet suivant</p>
                            <img src={Arr} alt="left" />
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}