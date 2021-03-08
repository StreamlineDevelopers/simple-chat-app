import React, { useContext, useEffect, useState } from 'react';
import  { Redirect, useHistory } from 'react-router-dom'
import Dashboard from './Dashboard.js'

// context api
import AuthContext from '../../context/AuthContext.js';
import { logoutAction } from '../../context/actions/auth/logoutAction.js';
import { getUserInfo } from '../../context/actions/users/getUserInfo.js';

const DashboardContainer = () => {
    const [joinIsActive, joinSetIsActive] = useState(false);
    const [createIsActive, createSetIsActive] = useState(false);
    const [clicked, setClicked] = useState(false);
    const [redirect, setRedirect] = useState('');

    const {authState:{ auth: { user} }, authDispatch} = useContext(AuthContext);
    const {userState:{ user:{ data } }, userDispatch}  = useContext(AuthContext);

    const history = useHistory();

    const joinClickHandler = (e) => {
        e.preventDefault();
        joinSetIsActive(true);
    }

    const createClickHandler = (e) => {
        e.preventDefault();
        createSetIsActive(true);
    }
    
    const logoutClickHandler = (e) => {
        e.preventDefault();
        logoutAction()(authDispatch);
        setClicked(true);
    }
    const profileClickHandler = (e) => {
        e.preventDefault();
        getUserInfo(history)(userDispatch)
    }

    useEffect(() => {
        if(clicked){
            setRedirect('/');
            setClicked(false);
        }

    }, [clicked])

    if(!localStorage.jwt_token) return <Redirect to={redirect}/>
    return(
        <Dashboard
            joinClickHandler = {joinClickHandler}
            createClickHandler = {createClickHandler}
            logoutClickHandler = {logoutClickHandler}
            profileClickHandler ={profileClickHandler}

            joinIsActive = {joinIsActive}
            joinSetIsActive = {joinSetIsActive}
            createIsActive = {createIsActive}
            createSetIsActive = {createSetIsActive}
            user = {user}
        />
    )
}

export default DashboardContainer;
