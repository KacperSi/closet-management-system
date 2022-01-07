import React from 'react'
import GermentImage from './GermentImage'

const GermentImageContainer = () => {
    return (
        <div className='germent-image-container'>
            <GermentImage image="images/hat.jpeg" type="hat"/>
            <GermentImage image="images/tshirt.jpeg" type="tshirt"/>
            <GermentImage image="images/trousers.jpeg" type="trousers"/>
            <GermentImage image="images/shoes.jpeg" type="shoes"/>
        </div>
    )
}

export default GermentImageContainer
