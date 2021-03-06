import React, { useState } from 'react';
import Login from './Login.js';

const LoginContainer = () => {
    const [input, setInput] = useState({
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
        <Login
            formClickhandler = {formClickhandler}
            inputChangeHandler = {inputChangeHandler}
        />
    )
}

export default LoginContainer;