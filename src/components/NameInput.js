import Input from '@mui/joy/Input';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import IconButton from '@mui/joy/IconButton';
import { Button } from '@mui/joy';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function NameInput() {

    const [userName, setUserName] = useState('')

    const handleChange = (e) => {
        setUserName(e.target.value);
        console.log(userName)
    }

    return (
        <div className="nameInputContainer">
            <IconButton className="backArrow" aria-label="Back to previous screen">
                <span className="material-icons backArrow">
                    arrow_back_ios
                </span>
            </IconButton>

            <div className="nameTitleContainer">
                <span class="material-icons badge">
                    badge
                </span>
                <h2>Welcome to Loop!</h2>
                <p>Let's start with your name. What would you like your profile to be called?</p>
                <FormControl>
                    <FormLabel>Name</FormLabel>
                    <Input className="nameInput" onChange={handleChange} placeholder="Your name" />
                    <Link className="linkComponent" to={{ pathname: "/home", state: { userName } }}><Button className="startPlanning" size="lg">Start Planning!</Button></Link>
                </FormControl>
            </div>
        </div>
    );
}

export default NameInput;