import React from 'react'
import './card.css'

const Card = ({lang, img}) => {
    return (
        <div className="card">
            <img src={ img } alt="lang.svg" />
            <h3>{ lang }</h3>
        </div>
    )
}

export default Card
