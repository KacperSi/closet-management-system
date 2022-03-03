import React from 'react'

const GermentImage = ({ image, category}) => {
    return (
        <div className='germent-image'>
            <img src={image} alt={`A ${category}`}></img>
        </div>
    )
}

export default GermentImage
