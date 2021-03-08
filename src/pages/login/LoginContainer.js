import React, { useContext, useEffect, useState } from 'react';
import  { Redirect } from 'react-router-dom'
import Login from './Login.js';

// context api
import AuthContext from '../../context/AuthContext.js';
import { loginAction } from '../../context/actions/auth/loginAction.js';

const LoginContainer = () => {
    const [input, setInput] = useState({
        email: '',
        password: ''
    }); // set initial login form object 

    const {authState:{ auth: { loading, error, user} }, authDispatch} = useContext(AuthContext);

    const formClickhandler = (e) => {
        e.preventDefault();

        loginAction(input)(authDispatch);
    } // dispatch login action on login click
    
    const inputChangeHandler = (e) => {
        e.preventDefault();
        
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })  
    } // get input form data through onChange event

    useEffect(() => {
        if(user){
            user.user = null;
        } 
        //set user back to null on every fresh page so that the user can go and register again.
        //since the register page auto redirect the page to login page if user is not null.
    }, [])

     //if jwt token exist on localstorage redirect to dashboard
    let isLocalStorageHasToken = !!localStorage.jwt_token;
    if(isLocalStorageHasToken) return <Redirect to='/dashboard'/>
    
    return(
        <Login
            formClickhandler = {formClickhandler}
            inputChangeHandler = {inputChangeHandler}
            loading = {loading}
            error = {error}
            user = {user}
        />
    )
}

export default LoginContainer;