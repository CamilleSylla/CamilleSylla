import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import Cards from './Cards/Cards';
import './Project.css';
import Title from './Title/Title';
import Folio from '../../assets/Folio.jpg'
import Ecom from '../../assets/ecom.jpg'

import Arr from '../../assets/Rarrow.svg';
import Axios from 'axios';

export default function Project() {
    const [project, setProject] = useState({ id: "1" })
    const [allProject, setAllProject] = useState([])
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
    function add () {
        let acc = Number(project.id);
        let long = allProject.length;
        if (acc >= long) {
            setProject({ ...project, id: "1" })
        } else {
            setProject({ ...project, id: `${acc += 1}` })
        }
    }
    function minus  () {
        let acc = Number(project.id);
        let long = allProject.length;
        if (acc < long) {
            setProject({ ...project, id: `${long}` })
        } else {
            setProject({ ...project, id: `${acc -= 1}` })
        }
    }

    useEffect(() => {
        Axios.get(`https://iconic-store-serv.herokuapp.com/api/projects`).then(
            res => {
                setAllProject(res.data);
            }
        )
    })
    const pro = allProject.filter(el => el.id === project.id)
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
                    <Cards pro={pro} />
                    <div className="selector">
                        <div id="arrLeft" onClick={minus}>
                            <img src={Arr} alt="left" />
                            <p>Projet précedent</p>
                        </div>
    {pro.map((name) => {return <p>{name.name}</p>})}
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