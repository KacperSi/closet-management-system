import React from 'react';
import GermentImage from './GermentImage';
import './GermentImageContainer.css';
import { Button } from '@mui/material';
import API from '../API';

const GermentImageContainer = () => {
    return (
        <div className='germent-image-container'>
            <GermentImage image="images/hat.jpeg" type="hat"/>
            <GermentImage image="images/tshirt.jpeg" type="tshirt"/>
            <GermentImage image="images/trousers.jpeg" type="trousers"/>
            <GermentImage image="images/shoes.jpeg" type="shoes"/>
            <Button onClick={API.generateClothes}>Generate</Button>
        </div>
    )
}

export default GermentImageContainer
