import React from 'react'
import CollectionsSlider from '../components/CollectionsSlider'
import { CollectionsSliderData } from '../components/CollectionsSliderData'

const Collections = () => {
    return (
        <div className='collections'>
            {/* <h1>Collections</h1> */}
            <CollectionsSlider slides={CollectionsSliderData}/>
        </div>
    )
}

export default Collections