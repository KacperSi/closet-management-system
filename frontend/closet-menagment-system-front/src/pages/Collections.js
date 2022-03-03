import React from 'react'
import CollectionsSlider from '../components/CollectionsSlider'
import { TestClothes2 } from '../components/TestClothes2'

const Collections = () => {
    return (
        <div className='collections'>
            <CollectionsSlider slides={TestClothes2}/>
        </div>
    )
}

export default Collections