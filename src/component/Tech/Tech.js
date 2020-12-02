
import React, { useEffect, useState } from 'react';
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


    return (
        <div className="appTech">
            <TechTitle />
            <div className="stackMenu">
                <button onClick={StackClick} id="front" value="front">Front-End</button>
                <button onClick={StackClick} id="back" value="back">Back-End</button>
                <button onClick={StackClick} id="cms" value="cms">CMS</button>
            </div>
            <Cards stack={stack} />
        </div>
    )
}