import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar.js';

const NavbarContainer = () => {
    const [joinIsActive, joinSetIsActive] = useState(false);
    const { pathname } = useLocation();

    const roomClickHandler = (e) => {
        e.preventDefault();
        joinSetIsActive(true);
    }

    const contactClickHandler = (e) => {
        e.preventDefault();
    }
    
    return(
       <Navbar
            roomClickHandler = {roomClickHandler}
            contactClickHandler = {contactClickHandler}
            joinIsActive = {joinIsActive}
            joinSetIsActive = {joinSetIsActive}
            pathname = { pathname }
       />
    )
}

export default NavbarContainer;