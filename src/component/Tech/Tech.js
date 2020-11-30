import React, { useState } from 'react';
import Cards from './Cards/Cards';
import './Tech.css';
import TechTitle from './Title/Title';

export default function Tech() {
    const [stack, setStack] = useState({
        stack: "back"
    })

    const StackClick = (e) => {
        setStack({...stack, stack: e.target.value})
    }


    return (
        <div className="appTech">
            <TechTitle />
            <div className="stackMenu">
                <button onClick={StackClick} value="front">Front-End</button>
                <button onClick={StackClick} value="back">Back-End</button>
            </div>
            <Cards stack={stack}/>
        </div>
    )
}