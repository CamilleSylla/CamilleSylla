import React from 'react';
import './Social.css'

import Git from '../../assets/github.svg'
import Link from '../../assets/linkedin.svg'
import Tele from '../../assets/telegram.svg'

export default function Social() {

    return (

        <div className="socialContainer">
            <div className="socialIcons">
                <img src={Git} alt="Github" />
                <img src={Link} alt="LinkedIn" />
                <img src={Tele} alt="Mail" />
            </div>
        </div>
    )
}