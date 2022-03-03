import React, { useState } from 'react'
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import Avatar from '@mui/material/Avatar';


const Settings = ({ dateJoined, login, email, location}) => {
    const [loginText, setLoginText] = useState(login);
    const [emailText, setEmailText] = useState(email);
    const [locationText, setLocationText] = useState(location);

    const handleChange = (e) => {
        if(e.target.id === "email"){
            setEmailText(e.target.value)
        }else if(e.target.id === "login"){
            setLoginText(e.target.value)
        }else if(e.target.id === "location"){
            setLocationText(e.target.value)
        }
    }

    const updateData = async () => {
        console.log(loginText, emailText, locationText);
    }
    
    return (
        <Stack spacing={4} alignItems="center">
            <Avatar sx={{ fontSize:34 ,width: 72, height: 72}}>{loginText.slice(0,2)}</Avatar>
            <TextField 
                id="date-joined" 
                label="Joined on" 
                variant="standard" 
                value={dateJoined}
                InputProps={{
                    readOnly: true,
                }}/>
            <TextField id="email" label="Email" variant="standard" onChange={handleChange} value={emailText}/>
            <TextField id="login" label="Login" variant="standard" onChange={handleChange} value={loginText}/>
            <TextField id="location" label="Location" variant="standard" onChange={handleChange} value={locationText}/>
            <Button onClick={updateData}>Update</Button>
        </Stack>
    )
}

export default Settings