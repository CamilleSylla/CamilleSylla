import React from 'react';
import './Cards.css';

import Folio from '../../../assets/Folio.jpg'
import Ecom from '../../../assets/ecom.jpg'
import Check from '../../../assets/check.svg'
import Mar from '../../../assets/tenderizer.svg'

export default function Cards({project}) {
    const Projects = [
        {
            id: "1",
            name: "Site PorteFolio",
            duration: "1 semaine",
            type: "Front-End",
            start: "29/11/2020",
            goal: "Structurer un site web ayant pour objectif d'etre original de par son design et ses animations.",
            probleme: "Creer des animations cohérentes / trouver un design original / integrer un modele 3D et gerer la cameras afin d'interagir avec celui-ci / rendre le tout compatible et adaptatif à tout les ecrans ",
            technologie: ["React", "Html", "Css", "FramerMotion", "THREE.js"],
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

    const pro = Projects.filter(el => el.id === project.id)

    return (
        <div className="projectCards">
            {pro.map((details, i) => {

                return (
                    <div className="projetViews">
                        <img src={details.image} alt="Folio" />
                        <p className="proInfo">Nom du site :  <span>{" " + details.name}</span></p>
                        <p className="proInfo">Creation du projet :  <span>{" " + details.start}</span></p>
                        <p className="proInfo">Temps de conception :  <span>{" " + details.duration}</span></p>
                        <p className="proInfo">Type de projet :  <span>{" " + details.duration}</span></p>
                    </div>
                )
            })}

            {pro.map((details, i) => {

                return (
                    <div className="projectDetails">
                        <p className="proInfo">But du projet : <br />  <span>{" " + details.goal}</span></p>
                        <p className="proInfo">Difficulté rencontré : <br />  <span>{" " + details.probleme}</span></p>
                        <p className="proInfo">Technologie : </p>
                        <div className="projectTechnos">
                            {details.technologie.map((tech, i) => {
                                return <td >{tech}</td>
                            })} </div>
                    </div>
                )
            })}

            {pro.map((done, i) => {
                if (done.finish === "oui") {
                    return (
                        <div className="projectDone">
                            <p> Projet Terminé ? </p>
                            <p>Oui</p>
                            <img src={Check} alt="oui" />
                            <p> lien :</p>
                            <a>{done.linkF}</a>
                        </div>
                    )

                } else {
                    return (
                        <div className="projectDone">
                            <p> Ce projet est encore en cours de construction</p>
                            <img className="projetMarteau" src={Mar} alt="Marteau" />
                            <p> lien :</p>
                            <a>{done.linkF}</a>
                        </div>

                    )
                }

            })}

        </div>
    )
}