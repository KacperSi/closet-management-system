import React, {useState} from 'react'

import GermentImage from './GermentImage'
import './ClothesImageSlider.css'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import uuid from 'react-uuid';

const ClothesImagesSlider = ({ clothes }) => {

    const columnsFromBackend = {
        [uuid()]: {
          name: "clothes-placeholder-hat",
          items: []
        },
        [uuid()]: {
          name: "clothes-placeholder-tshirt",
          items: []
        }
      };

    const [items, setItems] = useState(clothes)
    const [current, setCurrent] = useState(0);
    const [columns, setColumns] = useState(columnsFromBackend);
    const length = clothes.length


    const nextSlide = () => {
        setCurrent(current === length - 3 ? 0 : current + 1);
    }
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 3 : current - 1);
    }
    
    const handleOnDragEnd = (result, columns, setColumns) => {
        if (!result.destination) return;
        const { source, destination } = result;

        if (source.droppableId === 'clothes-slider' && source.droppableId !== destination.droppableId){
            console.log("HERE")
            const destColumn = columns[destination.droppableId];
            // const sourceItems = [sourceColumn.items];
            const destItems = [...destColumn.items];
            const pieces = Array.from(items);
            const [changedDestination] = pieces.splice(source.index, 1);
            destItems.splice(destination.index, 0, changedDestination);
            console.log(destItems)
            setItems(pieces);
            console.log(items)
            console.log(columns)
            setColumns({...columns, [destination.droppableId]: {...destColumn, items: destItems}})
        }
        else if (source.droppableId !== destination.droppableId) {
            console.log(source);
            console.log(destination);
            const sourceColumn = columns[source.droppableId];
            console.log(sourceColumn)
            const destColumn = columns[destination.droppableId];
            console.log(destColumn)
            const sourceItems = [sourceColumn.items];
            const destItems = [...destColumn.items];
            const pieces = Array.from(items);
            const [changedDestination] = pieces.splice(source.index, 1);
            destItems.splice(destination.index, 0, changedDestination);
            setColumns({...columns, [source.droppableId]: {...sourceColumn, items: pieces},
                 [destination.droppableId]: {...destColumn, items: destItems}})
                 console.log(columns)
        }
        else {
            const pieces = Array.from(items);
            const [reorderPieces] = pieces.splice(source.index, 1);
            pieces.splice(destination.index, 0, reorderPieces);
            setItems(pieces);
        }
        
    }
    return (
            <div className='clothes-image-slider'> 
            <DragDropContext onDragEnd={result => handleOnDragEnd(result, columns, setColumns)}>
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
                {Object.entries(columns).map(([columnId, column], index) => {
                    return(
                        <Droppable droppableId={columnId} key={columnId} direction="horizontal">
                            {(provided) => (
                                <div className='clothes-image-drop' {...provided.droppableProps} ref={provided.innerRef}>
                                    {column.items.map((item, index) => {
                                        <Draggable key={item.id} draggableId={item.id} index={index}>
                                            {(provided) => {
                                                console.log(item)
                                                if(item==[]){
                                                    return(<div>EMPTY</div>)
                                                }else{
                                                return(
                                                    <div {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                                                        <div className='drag-item' >
                                                            <GermentImage image={item.img} type={item.id}/>
                                                        </div>
                                                    </div>
                                                )}
                                            }}
                                        </Draggable>
                                    })}
                                    {provided.placeholder}
                                </div>
                            )}  
                        </Droppable>
                    )
                })}
            </DragDropContext>
            </div>
    )
}

export default ClothesImagesSlider
