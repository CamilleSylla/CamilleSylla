import React from 'react';
import './Cards.css';


import Check from '../../../assets/check.svg'
import Mar from '../../../assets/tenderizer.svg'

export default function Cards({pro}) {

    return (
        <div className="projectCards">
            {pro.map((details, i) => {

                return (
                    <div className="projetViews">
                        <img src={details.image} alt="Folio" onClick={() => window.open(`${details.link}`)}/>
                        <p className="proInfo">Nom du site :  <span>{" " + details.name}</span></p>
                        <p className="proInfo">Creation du projet :  <span>{" " + details.start}</span></p>
                        <p className="proInfo">Temps de conception :  <span>{" " + details.duration}</span></p>
                        <p className="proInfo">Type de projet :  <span>{" " + details.type}</span></p>
                    </div>
                )
            })}

            {pro.map((details, i) => {

                return (
                    <div className="projectDetails">
                        <p className="proInfo">But du projet : <br />  <span>{" " + details.goal}</span></p>
                        <p className="proInfo">Difficultés rencontrées : <br />  <span>{" " + details.problem}</span></p>
                        <p className="proInfo">Technologies : </p>
                        <div className="projectTechnos">
                            {details.tech.map((tech, i) => {
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
                            <a onClick={() => window.open(`${done.link}`)}>{done.link}</a>
                            <p> Git :</p>
                            <a onClick={() => window.open(`${done.git}`)}>{done.git}</a>
                        </div>
                    )

                } else {
                    return (
                        <div className="projectDone">
                            <p> Ce projet est encore en cours de construction</p>
                            <img className="projetMarteau" src={Mar} alt="Marteau" />
                            <p> lien :</p>
                            <a onClick={() => window.open(`${done.link}`)}>{done.link}</a>
                            <p> Git :</p>
                            <a onClick={() => window.open(`${done.git}`)}>{done.git}</a>
                        </div>

                    )
                }

            })}

        </div>
    )
}