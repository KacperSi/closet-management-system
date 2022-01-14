import React from 'react'
import CollectionsSlider from '../components/CollectionsSlider'
import { TestClothes } from '../components/TestClothes'

const Collections = () => {
    return (
        <div className='collections'>
            <CollectionsSlider slides={TestClothes}/>
        </div>
    )
}

export default Collections