import React from 'react'
import ClothesImagesSlider from '../components/ClothesImagesSlider'
import { SingleClothes } from '../components/SingleClothes'

const CreateCollection = () => {
    return (
        <div className='create-collection'>
            <ClothesImagesSlider clothes={SingleClothes}/>
        </div>
    )
}

export default CreateCollection
