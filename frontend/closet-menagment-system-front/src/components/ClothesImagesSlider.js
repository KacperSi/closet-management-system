import React, {useState} from 'react'

import GermentImage from './GermentImage'
import './ClothesImageSlider.css'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const ClothesImagesSlider = ({ clothes }) => {
    const [items, setItems] = useState(clothes)
    const [current, setCurrent] = useState(0);
    const length = clothes.length


    const nextSlide = () => {
        setCurrent(current === length - 3 ? 0 : current + 1);
    }
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 3 : current - 1);
    }
    
    const handleOnDragEnd = (result) => {
        if (!result.destination) return;
        const pieces = Array.from(items);
        const [reorderPieces] = pieces.splice(result.source.index, 1);
        pieces.splice(result.destination.index, 0, reorderPieces);

        setItems(pieces);
    }
    console.log(current)

    return (
            <div className='clothes-image-slider'> 
            <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide}/>
            <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide}/>
            <DragDropContext onDragEnd={handleOnDragEnd}>
                <Droppable droppableId='clothes-slider' direction="horizontal">
                    {(provided) => (
                        <ul className='clothes-image-list' {...provided.droppableProps} ref={provided.innerRef}>
                            {items.map((piece, index) => {
                                return(
                                    <Draggable key={piece.id} draggableId={piece.id} index={index}>
                                        {(provided) => (
                                            <li {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                                                <div className='drag-item'>
                                                    <GermentImage image={piece.img} type={piece.id}/>
                                                </div>
                                                
                                            </li>
                                        )}
                                    </Draggable>
                                )
                            })}
                            {provided.placeholder}
                        </ul>
                    )}
                </Droppable>
                
            </DragDropContext>
            <DragDropContext onDragEnd={handleOnDragEnd}>
                <Droppable droppableId='clothes-slider' direction="horizontal">
                    {(provided) => (
                        <div className='clothes-image-drop' {...provided.droppableProps} ref={provided.innerRef}>
                            {provided.placeholder}
                        </div>
                    )}
                    
                </Droppable></DragDropContext>
            </div>
    )
}

export default ClothesImagesSlider
