import React, { useState } from 'react';
import './Cards.css';

//front-end
import Reactjs from '../../../assets/react.svg'
import Gsap from '../../../assets/gsap.svg'
import CSS from '../../../assets/css.svg'
import Mui from '../../../assets/mui.svg'
import Js from '../../../assets/js.svg'
import Html from '../../../assets/html.svg'

//back-end

import Node from '../../../assets/node.svg'
import Mdb from '../../../assets/mongodb.svg'
import Jest from '../../../assets/jest.svg'
import Exp from '../../../assets/express.svg'
import Jwt from '../../../assets/jwt.svg'
import Wp from '../../../assets/WP.svg'
import Up from '../../../assets/up.svg'
import { motion } from 'framer-motion';

export default function Cards({ stack }) {

    const pageTransition = {
        ini: {
            y: 0,
            x: 0
        },
        out: {
            y: "100vw"
        },
        in: {
            y: "-100v"
        }

    }

    function Stack() {
        if (stack.stack === "back") {
            return (
                <div className="techSplice">
                    <div className="techFront">
                        <div className="card">
                            <img src={Node} alt="" />
                            <h3>Node.js</h3>
                        </div>
                        <div className="card">
                            <img src={Exp} alt="" />
                            <h3>Express</h3>
                        </div>
                        <div className="card">
                            <img src={Jest} alt="" />
                            <h3>Jest</h3>
                        </div>
                        <div className="card">
                            <img src={Mdb} alt="" />
                            <h3>MongoDB</h3>
                        </div>
                        <div className="card">
                            <img src={Jwt} alt="" />
                            <h3>JSonWebToken</h3>
                        </div>
                    </div>
                </div>
            )
        } else if (stack.stack === "cms") {
            return (
                <div className="techSplice">
                    <div className="techFront">
                        <div className="card">
                            <img src={Wp} alt="" />
                            <h3>Wordpress</h3>
                        </div>
                    </div>
                </div>
            )

        } else if (stack.stack === "front") {
            return (
                <div className="techSplice">
                    <div className="techFront">
                        <div className="card">
                            <img src={Js} alt="" />
                            <h3>JavaScript</h3>
                        </div>
                        <div className="card">
                            <img src={Reactjs} alt="" />
                            <h3>React</h3>
                        </div>
                        <div className="card">
                            <img src={Mui} alt="" />
                            <h3>Matérial UI</h3>
                        </div>
                        <div className="card">
                            <img src={Html} alt="" />
                            <h3>HTML</h3>
                        </div>
                        <div className="card">
                            <img src={CSS} alt="" />
                            <h3>CSS</h3>
                        </div>
                        <div className="card">
                            <img src={Gsap} alt="" />
                            <h3>GSAP</h3>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="techSelect">
                    <img src={Up} alt="up arrow"/>
                    <p id="select"> Veuillez selectionnez une catégorie</p>
                </div>

            ) 
        }
    }
    return (
        <div className="techContainer">

            {Stack()}
        </div>
    )
}