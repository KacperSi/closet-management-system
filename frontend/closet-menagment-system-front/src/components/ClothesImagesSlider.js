import React, {useState} from 'react'
import GermentImage from './GermentImage'
import './ClothesImageSlider.css'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'
import { Button } from '@mui/material';

const ClothesImagesSlider = ({ clothes }) => {
    const [name, setName] = useState('');
    const [hat, setHat] = useState('');
    const [tshirt, setTshirt] = useState('');
    const [trousers, setTrousers] = useState('');
    const [cover1, setCover1] = useState('');
    const [cover2, setCover2] = useState('');
    const [boots, setBoots] = useState('');
    const [garment, setGarment] = useState(clothes[0]);

    const submit = () => {
        console.log(tshirt);
    }
    
    const handleChange = (e) => {
        console.log(e.target.value);
        const foundGarment = clothes.find(c => c.name === e.target.value);
        console.log(foundGarment);
        if(foundGarment.cathegory === 'hat'){
            setHat(foundGarment);
            setGarment(foundGarment);
        }else if(foundGarment.cathegory === 'tshirt'){
            setTshirt(foundGarment);
            setGarment(foundGarment);
        }else if(foundGarment.cathegory === 'trousers'){
            setTrousers(foundGarment);
            setGarment(foundGarment);
        }else if(foundGarment.cathegory === 'cover1'){
            setCover1(foundGarment);
            setGarment(foundGarment);
        }
        else if(foundGarment.cathegory === 'cover2'){
            setCover2(foundGarment);
            setGarment(foundGarment);
        }else if(foundGarment.cathegory === 'boots'){
            setBoots(foundGarment);
            setGarment(foundGarment);
        }
    }
    return (
        <div className='add-collection-container'>
            <div className='add-clothes-form'>
                <h2>Create collection</h2>
                <form>
                    <label>Name: </label>
                    <input 
                        type='text' 
                        required 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <label>Select hat:</label>
                    <select
                        value={hat.name}
                        onChange={handleChange}>
                        <option value='none'>None</option>
                        {clothes.map((c, index) => {
                            if (c.cathegory == 'hat'){
                                return(
                                    <option value={c.name} key={index}>{c.name}</option>
                                )
                            }else{
                                return('')
                            }
                            
                        })}
                    </select>
                    <label>Select tshirt:</label>
                    <select
                        value={tshirt.name}
                        onChange={handleChange}>
                        <option value='none'>None</option>
                        {clothes.map((c, index) => {
                            if (c.cathegory == 'tshirt'){
                                return(
                                    <option value={c.name} key={index}>{c.name}</option>
                                )
                            }else{
                                return('')
                            }
                        })}
                    </select>
                    <label>Select trousers:</label>
                    <select
                        value={trousers.name}
                        onChange={handleChange}>
                        <option value='none'>None</option>
                        {clothes.map((c, index) => {
                            if (c.cathegory == 'trousers'){
                                return(
                                    <option value={c.name} key={index}>{c.name}</option>
                                )
                            }else{
                                return('')
                            }
                        })}
                    </select>
                    <label>Select hoodie:</label>
                    <select
                        value={cover1.name}
                        onChange={handleChange}>
                        <option value='none'>None</option>
                        {clothes.map((c, index) => {
                            if (c.cathegory == 'cover1'){
                                return(
                                    <option value={c.name} key={index}>{c.name}</option>
                                )
                            }else{
                                return('')
                            }
                        })}
                    </select>
                    <label>Select jacket:</label>
                    <select
                        value={cover2.name}
                        onChange={handleChange}>
                        <option value='none'>None</option>
                        {clothes.map((c, index) => {
                            if (c.cathegory == 'cover2'){
                                return(
                                    <option value={c.name} key={index}>{c.name}</option>
                                )
                            }else{
                                return('')
                            }
                        })}
                    </select>
                    <label>Select boots:</label>
                    <select
                        value={boots.name}
                        onChange={handleChange}>
                        <option value='none'>None</option>
                        {clothes.map((c, index) => {
                            if (c.cathegory == 'boots'){
                                return(
                                    <option value={c.name} key={index}>{c.name}</option>
                                )
                            }else{
                                return('')
                            }
                        })}
                    </select>
                    <Button onClick={submit}>Create</Button>
                </form>
            </div>
            <div>
                <GermentImage image={garment.image} category={garment.cathegory}/>
            </div>
        </div>
    )
}

export default ClothesImagesSlider
