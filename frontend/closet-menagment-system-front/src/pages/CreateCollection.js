import React from 'react'
import ClothesImagesSlider from '../components/ClothesImagesSlider'
import { TestClothes3 } from '../components/TestClothes3'

const CreateCollection = () => {
    return (
        <div className='create-collection'>
            <ClothesImagesSlider clothes={TestClothes3}/>
        </div>
    )
}

export default CreateCollection
