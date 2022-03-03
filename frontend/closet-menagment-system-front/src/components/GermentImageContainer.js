import React, { useState } from 'react';
import GermentImage from './GermentImage';
import './GermentImageContainer.css';
import { Button } from '@mui/material';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import API from '../API';

const GermentImageContainer = ({ clothes }) => {
    return (
        <div className='germent-image-container'>
            {clothes.map((clth, index) => {
                return(
                    <div className={`grid-item ${clth.cathegory}`} key={index}>
                        <GermentImage image={clth.image} category={clth.cathegory}/>
                    </div>
                )
            })}
        </div>
    )
}

export default GermentImageContainer  
