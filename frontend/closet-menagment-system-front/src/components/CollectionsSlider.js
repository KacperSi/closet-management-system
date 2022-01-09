import React, { useState } from 'react'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'
import { CollectionsSliderData } from './CollectionsSliderData'
import './CollectionsSlider.css'
import GermentImage from './GermentImage'
import GermentImageContainer from './GermentImageContainer'

const CollectionsSlider = ({ slides }) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    }
    const prevSlide = () => {
        setCurrent(current === 0 ? length -1 : current - 1);
    }
    if (!Array.isArray(slides) || slides.length <= 0){
        return null;
    }

    return (
        <section className='slider'>
            {/* <h1>{current}</h1> */}
            <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide}/>
            <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide}/>
            {CollectionsSliderData.map((slide, index) => {
                return (
                    <div className={index === current ? 'slide active' : 'slide'} key={index}>
                        {index === current && (<GermentImageContainer clothes={slides[current]}/>)}
                    </div>
                );
            })}
        </section>
        // <img src={slide.image} alt='an image' className='image'/>
    )
}

export default CollectionsSlider