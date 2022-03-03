import { Button } from '@mui/material';
import React, { useState } from 'react'
import './ClothesForm.css';
import API from '../API';
import MyDropzone from './MyDropzone';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';

const ClothesForm = () => {
    const [name, setName] = useState('');
    const [image, setImage] = useState();
    const [type, setType] = useState('');
    const [weather, setWeather] = useState('');
    const [value, setValue] = useState([15, 30]);

    const submit = async () => {
        const res = await API.addClothes(name, image, type, weather);
        console.log(res);
    } 

    const handleChange = (event, newValue) => {
          setValue(newValue);
          console.log(value);
        };

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
                <label>Add image:</label>
                <MyDropzone/>
                <label>Select type:</label>
                <select
                    value={type}
                    onChange={(e) => setType(e.target.value)}>
                    <option value='hat'>Hat</option>
                    <option value='t-shirt'>T-Shirt</option>
                    <option value='trousers'>Trousers</option>
                    <option value='hoodie'>Hoodie</option>
                    <option value='jacket'>Jacket</option>
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
                <label>Select weather range:</label>
                <Box sx={{ width: 300 }}>
                    <Slider
                        // getAriaLabel={() => 'Temperature range'}
                        value={value}
                        onChange={handleChange}
                        min={-20}
                        max={40}
                        valueLabelDisplay="auto"
                    />
                </Box>
                <Button onClick={submit}>Add</Button>
            </form>
        </div>
    )
}

export default ClothesForm
