import React, { useState } from 'react';
import Navbar from './Navbar.js';

const NavbarContainer = () => {
    const [joinIsActive, joinSetIsActive] = useState(false);

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
       />
    )
}

export default NavbarContainer;