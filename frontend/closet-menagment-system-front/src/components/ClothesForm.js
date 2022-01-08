import { Button } from '@mui/material';
import React, { useState } from 'react'
import './ClothesForm.css';
import API from '../API';

const ClothesForm = () => {
    const [name, setName] = useState('');
    const [image, setImage] = useState();
    const [type, setType] = useState('t-shirt');
    const [weather, setWeather] = useState('sunny');

    const submit = async () => {
        const res = await API.addClothes(name, image, type, weather);
        console.log(res);
    } 

    return (
        <div className='add-clothes-form'>
            <h2>Add piece of clothing</h2>
            <form>
                <label>Name: </label>
                <input 
                    type='text' 
                    required 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <label>Add image</label>
                <textarea
                    required
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                ></textarea>
                <label>Select type:</label>
                <select
                    value={type}
                    onChange={(e) => setType(e.target.value)}>
                    <option value='hat'>Hat</option>
                    <option value='t-shirt'>T-Shirt</option>
                    <option value='trousers'>Trousers</option>
                    <option value='hoodie'>Hoodie</option>
                    <option value='jacket'>Jacket</option>
                    <option value='shorts'>Shorts</option>
                    <option value='shirt'>Shirt</option>
                    <option value='shoes'>Shoes</option>
                </select>
                <label>Select weather type:</label>
                <select
                    value={weather}
                    onChange={(e) => setWeather(e.target.value)}>
                    <option value='none'>None</option>
                    <option value='sunny'>Sunny</option>
                    <option value='cloudy'>Cloudy</option>
                    <option value='rainy'>Rainy</option>
                    <option value='snowy'>Snowy</option>
                    <option value='windy'>Windy</option>
                </select>
                <Button onClick={submit}>Add</Button>
            </form>
        </div>
    )
}

export default ClothesForm
