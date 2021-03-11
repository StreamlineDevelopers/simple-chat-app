import React, { useContext, useEffect } from 'react';
import  { useHistory } from 'react-router-dom';
import Dashboard from './Dashboard.js'

// context api
import AuthContext from '../../context/AuthContext.js';
import { getUserInfo } from '../../context/actions/users/getUserInfo.js';
import { updateUserInfo } from '../../context/actions/users/updateUserInfo.js';

const DashboardContainer = () => {
    const {userState:{ user }, userDispatch}  = useContext(AuthContext);
    const {updateUserState:{ updateUser }, updateUserDispatch}  = useContext(AuthContext);

    const history = useHistory();

    const joinClickHandler = (e) => {
        e.preventDefault();

        let input = { isActive: true };
        let reqData = localStorage.jwt_token;
        let isDecode = true;
        let type = null;
        let path = '/dashboard/chatroom';

        updateUserInfo(history, input, reqData, isDecode, path, type)(updateUserDispatch);
    }

    const profileClickHandler = (e) => {
        e.preventDefault();
        getUserInfo(history,'/profile')(userDispatch);
    }

    useEffect(() => {
        //call once when refreshed so that there will be data again // also to call axios interceptor
        getUserInfo(history)(userDispatch);
    }, []) 


    return(
        <Dashboard
            joinClickHandler = {joinClickHandler}
            profileClickHandler ={profileClickHandler}
            isUpdateLoading = {updateUser.isLoading}
            isUserLoading = {user.isLoading}
        />
    )
}

export default DashboardContainer;
