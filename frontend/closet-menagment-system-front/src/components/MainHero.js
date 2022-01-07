import { Button } from '@mui/material'
import React from 'react'
import GermentImageContainer from './GermentImageContainer'

const MainHero = () => {
    return (
        <div className='main-hero'>
            <GermentImageContainer></GermentImageContainer>
            <Button>Generate</Button>
        </div>
    )
}

export default MainHero
