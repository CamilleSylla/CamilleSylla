import React from 'react'
import './Home.css'
import Scene from './Scene/Scene'
import Text from './Text/Text'
import Title from './Title/Title'

export default function Home() {

    return (
        <div className="appHome">
            <div className="homeGrid">
                <Title />
                <Text />
                
            </div>
        </div>

    )
}