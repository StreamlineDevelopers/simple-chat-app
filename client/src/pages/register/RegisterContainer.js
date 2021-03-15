import React, { useContext, useState } from 'react';
import  { Redirect } from 'react-router-dom'

import Register from './Register.js';

// context api
import AuthContext from '../../context/AuthContext.js';
import { registerAction } from '../../context/actions/auth/registerAction.js';

const RegisterContainer = () => {
    const [input, setInput] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    }); // set initial register object 

    const {authState:{ auth: { loading, error, user} }, authDispatch} = useContext(AuthContext);

    const formClickhandler = (e) => {
        e.preventDefault();

        registerAction(input)(authDispatch);
    } // dispatch register action on register click
    
    const inputChangeHandler = (e) => {
        e.preventDefault();
        
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })  
    } // get input form data through onChange event
    
    //if payload on reducer action stored a user then that means register is success and redirect to login page
    if(user?.user) return <Redirect to='/'/>   
    return(
        <Register
            formClickhandler = {formClickhandler}
            inputChangeHandler = {inputChangeHandler}
            loading = {loading}
            error = {error}
            user = {user}
        />
    )
}

export default RegisterContainer;