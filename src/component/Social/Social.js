import React from 'react';
import './Social.css'

import Git from '../../assets/github.svg'
import Link from '../../assets/linkedin.svg'

export default function Social() {

    const onClick = (e) => {
        window.open(e.target.name)
    }

    return (

        <div className="socialContainer">
            <div className="socialIcons">
                <img src={Git} alt="Github" name="https://github.com/CamilleSylla" onClick={onClick}/>
                <img src={Link} name="https://www.linkedin.com/in/camille-sylla-alternance/" onClick={onClick} alt="LinkedIn" />
               
            </div>
        </div>
    )
}