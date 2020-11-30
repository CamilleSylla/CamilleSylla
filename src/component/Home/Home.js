import React from 'react'
import './Home.css'
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