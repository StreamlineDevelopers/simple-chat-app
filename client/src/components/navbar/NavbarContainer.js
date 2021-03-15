import React, { useContext, useEffect, useState } from 'react';
import { useLocation, Redirect } from 'react-router-dom';
import Navbar from './Navbar.js';

import AuthContext from '../../context/AuthContext.js';
import { logoutAction } from '../../context/actions/auth/logoutAction.js';

const NavbarContainer = () => {
    const [clicked, setClicked] = useState(false);
    const [redirect, setRedirect] = useState('');

    const { pathname } = useLocation();
    
    const {authState:{ auth: { user} }, authDispatch} = useContext(AuthContext);

    const logoutClickHandler = (e) => {
        e.preventDefault();
        logoutAction()(authDispatch);
        setClicked(true);
    }
    
    useEffect(() => {
        if(clicked){
            setRedirect('/');
            setClicked(false);
        }

    }, [clicked])

    if(!localStorage.jwt_token) return <Redirect to={redirect}/>
    return(
       <Navbar
            logoutClickHandler = {logoutClickHandler}
            pathname = { pathname }
       />
    )
}

export default NavbarContainer;