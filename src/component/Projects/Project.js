import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import Cards from './Cards/Cards';
import './Project.css';
import Title from './Title/Title';
import Folio from '../../assets/Folio.jpg'
import Ecom from '../../assets/ecom.jpg'

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
    function add () {
        let acc = Number(project.id);
        let long = Projects.length;
        if (acc >= long) {
            setProject({ ...project, id: "1" })
        } else {
            setProject({ ...project, id: `${acc += 1}` })
        }
    }
    function minus  () {
        let acc = Number(project.id);
        let long = Projects.length;
        if (acc < long) {
            setProject({ ...project, id: `${long}` })
        } else {
            setProject({ ...project, id: `${acc -= 1}` })
        }
    }

    const Projects = [
        {
            id: "1",
            name: "Site PorteFolio",
            duration: "1 semaine",
            type: "Front-End",
            start: "29/11/2020",
            goal: "Structurer un site web ayant pour objectif d'etre original de par son design et ses animations.",
            probleme: "Creer des animations cohérentes / trouver un design original / integrer un modele 3D et gerer la cameras afin d'interagir avec celui-ci / rendre le tout compatible et adaptatif à tout les ecrans ",
            technologie: ["React", "Html", "Css", "FramerMotion", "THREE.js", "GSAP"],
            finish: "non",
            linkF: "Non déployer",
            linkB: "non",
            image: Folio
        },
        {
            id: "2",
            name: "Site E-Commerce",
            duration: "1 Mois",
            type: "Front-End & Back-End",
            start: "01/11/2020",
            goal: "Conception d'un site E-commerce dynamique avec systeme d'authentification, paiement, filtre, panier et bien plus encore. Creer une interface Administrateur pour gerer le stock (creer, modifier, supprimer), tableau de commandes, reception de message sur le site internet. Creer un server Node/Express connecter a une base de donnée MongoDB",
            probleme: "systeme d'authentification sécurisé / connection / integrer un modele 3D et gerer la cameras afin d'interagir avec le modele / rendre le tout compatible et adaptatif a tout les ecrans ",
            technologie: ["React", "Html", "Css", "Node.js", "Express", "JWT", "MongoDB"],
            finish: "Non",
            linkF: "https://iconic-ecom-client.netlify.app/",
            image: Ecom
        },
    ]

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
                    <Cards Projects={Projects} project={project} setProject={setProject} />
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