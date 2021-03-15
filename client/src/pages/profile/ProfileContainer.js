import React, { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import Profile from './Profile.js';

// context api actions
import AuthContext from '../../context/AuthContext.js';
import { getUserInfo } from '../../context/actions/users/getUserInfo.js';

const ProfileContainer = () => {
    // use states
    const [editIsActive, editSetIsActive] = useState(false);
    const [changePassIsActive, changePassSetIsActive] = useState(false);
    const [updatedData, setUpdatedData] = useState(null);

    //context api reducers
    const {userState:{ user:{data, isLoading} }, userDispatch}  = useContext(AuthContext);

    const history = useHistory();

    const editClickHandler = (e) => {
        e.preventDefault();
        editSetIsActive(true);
        
        //if updateData is empty use data for a fresh query on the current user.
        //if updateData is not empty, that means that the user edited his profile thus use the new updatedData info. 
        updatedData ? setUpdatedData(updatedData) : setUpdatedData(data);
    }
    
    const changePassClickHandler = (e) => {
        e.preventDefault();
        changePassSetIsActive(true);
    }

    useEffect(() => {
        //call once when refreshed so that there will be data again // also to call axios interceptor
        getUserInfo(history)(userDispatch);
    }, [editIsActive]) 

    return (
        <Profile
            editClickHandler = {editClickHandler}
            changePassClickHandler = {changePassClickHandler}

            data = {data}
            isLoading = {isLoading}
            
            editIsActive = {editIsActive}
            setIsActive = {editSetIsActive}
            updatedData = {updatedData}
            setUpdatedData = {setUpdatedData}

            changePassIsActive = {changePassIsActive}
            changePassSetIsActive = {changePassSetIsActive}
        />
    )
}

export default ProfileContainer