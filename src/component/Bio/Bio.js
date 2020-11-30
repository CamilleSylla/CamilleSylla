import React from 'react';
import './Bio.css';
import Infos from './Infos/Infos';
import TextBio from './Text/Text';
import BioTitle from './Title/Title';

export default function Bio() {

    return (
        <div className="appBio">
            <div className="bioContainer">
                <BioTitle />
                <TextBio />
                <Infos />
            </div>
        </div>


    )
}