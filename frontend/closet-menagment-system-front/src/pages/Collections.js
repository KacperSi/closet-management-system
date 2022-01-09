import React from 'react'
import CollectionsSlider from '../components/CollectionsSlider'
import { CollectionsSliderData } from '../components/CollectionsSliderData'
import { TestClothes } from '../components/TestClothes'

const Collections = () => {
    return (
        <div className='collections'>
            {/* <h1>Collections</h1> */}
            <CollectionsSlider slides={TestClothes}/>
        </div>
    )
}

export default Collections