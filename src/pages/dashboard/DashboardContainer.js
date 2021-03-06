import React, { useState } from 'react';
import Dashboard from './Dashboard.js';

const DashboardContainer = () => {
    const [joinIsActive, joinSetIsActive] = useState(false);
    const [createIsActive, createSetIsActive] = useState(false);

    const joinClickHandler = (e) => {
        e.preventDefault();
        joinSetIsActive(true);
    }

    const createClickHandler = (e) => {
        e.preventDefault();
        createSetIsActive(true);
    }
    
    return(
        <Dashboard
            joinClickHandler = {joinClickHandler}
            createClickHandler = {createClickHandler}
            joinIsActive = {joinIsActive}
            joinSetIsActive = {joinSetIsActive}
            createIsActive = {createIsActive}
            createSetIsActive = {createSetIsActive}
        />
    )
}

export default DashboardContainer;
