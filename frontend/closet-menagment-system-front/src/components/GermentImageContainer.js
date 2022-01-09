import React, { useState } from 'react';
import GermentImage from './GermentImage';
import './GermentImageContainer.css';
import { Button } from '@mui/material';
import API from '../API';

const GermentImageContainer = ({ clothes }) => {
    console.log(clothes)
    return (
        <div className='germent-image-container'>
            <GermentImage image={clothes.hat}/>
            <GermentImage image={clothes.tshirt}/>
            <GermentImage image={clothes.trousers}/>
            <GermentImage image={clothes.shoes}/>            
        </div>
    )
}

export default GermentImageContainer
