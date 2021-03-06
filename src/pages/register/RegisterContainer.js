import React, { useState } from 'react';
import Register from './Register.js';

const RegisterContainer = () => {
    const [input, setInput] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    });

    const formClickhandler = (e) => {
        e.preventDefault();
        
        console.log(input);
    }
    
    const inputChangeHandler = (e) => {
        e.preventDefault();
        
        setInput({
            ...input,
            [e.target.id]: e.target.value
        })  
    }
    
    return(
        <Register
            formClickhandler = {formClickhandler}
            inputChangeHandler = {inputChangeHandler}
        />
    )
}

export default RegisterContainer;