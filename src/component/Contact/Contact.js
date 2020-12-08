import React from 'react';
import './Contact.css';
import Form from './Form/Form';
import TitleContact from './Title/Title';
import { AnimatePresence, motion } from 'framer-motion';


export default function Contact() {

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
        ease: "anticipate",
        duration: .5
    }
    const pageStyle = {
        pposition: "absolute"
    }
    return (
        <motion.div
            exit="out"
            initial="in"
            animate="ini"
            variants={pageVariant}
            transition={pageTransition}
            style={pageStyle}>
            <div className="contactContainer">
                <div className="layer">
                    <TitleContact />
                        <Form />
                </div>
            </div>
        </motion.div>

    )
}