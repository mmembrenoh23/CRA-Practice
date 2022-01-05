import React from 'react'
import './card.css'
import PropTypes from 'prop-types'

const Card = ({lang, img, fcolor, scolor}) => {
    //console.log(PropTypes);
    return (
        <div className="card" style={{backgroundImage: `linear-gradient(120deg, ${fcolor}, ${scolor})` }}>
            <img src={ img } alt="lang.svg" />
            <h3>{ lang }</h3>
        </div>
    )
}

Card.protoTypes = {
    lang: PropTypes.string,
    img: PropTypes.string,
    fcolor: PropTypes.string,
    scolor: PropTypes.string,
}

export default Card
