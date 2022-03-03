import { Button } from '@mui/material'
import React from 'react'
import GermentImageContainer from '../components/GermentImageContainer'
import API from '../API'
import { TestClothes } from '../components/TestClothes'
import { useState } from 'react'

const MainHero = () => {
    const [id, setId] = useState(0);
    const length = TestClothes.length;

    const changeId = () => {
        setId(id >= length - 1 ? 0 : id + 1) 
    }
    const generateClothes = async () =>{
        const res = await API.generateClothes();
        changeId()
        console.log(res);
    }
    console.log(id)
    return (
        <div className='main-hero'>
            <GermentImageContainer clothes={TestClothes[id]}/>
            <Button onClick={generateClothes}>Generate</Button>
        </div>
    )
}

export default MainHero
