import Input from '@mui/joy/Input';
import { Button } from '@mui/joy';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function NameInput() {

    const [userName, setUserName] = useState('')

    const handleChange = (e) => {
        setUserName(e.target.value);
    }

    return (
        <>
            <h1>Welcome to Loop</h1>
            <p>Let's start with your name. What would you like your profile to be called?</p>
            <Input onChange={handleChange} placeholder="Your name" />
            <Link className="linkComponent" to={"/home"} name={userName}><Button size="md">Start Planning!</Button></Link>
        </>
    );
}

export default NameInput;