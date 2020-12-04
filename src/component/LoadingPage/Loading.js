import React from 'react';
import './Loading.css';


import Load from '../../assets/loading.svg';

export default function Loading () {

    return (
        <div className="loadingContainer">
            <img src={Load} alt="loading..." />
            <h3>Chargement...</h3>
        </div>
    )
}