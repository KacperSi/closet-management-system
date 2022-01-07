import React from 'react'

const GermentImage = ({ image, type}) => {
    return (
        <div className='germent-image'>
            <img src={image} alt={`A ${type}`}></img>
        </div>
    )
}

export default GermentImage
