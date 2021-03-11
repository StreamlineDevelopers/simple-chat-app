import React, { createRef, useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import EditProfile from './EditProfile.js';

//utils
import Query from '../../../helper/query.js';

// context api
import AuthContext from '../../../context/AuthContext.js'
import { updateUserInfo } from '../../../context/actions/users/updateUserInfo.js';

const EditProfileContainer = ({ isActive, setIsActive, updatedData, setUpdatedData }) => {
    const [formInput, setFormInput] = useState({
        firstName: updatedData?.firstName,
        lastName: updatedData?.lastName,
        email: updatedData?.email
    });
    const [isSubmit, setIsSubmit]= useState(false);
    
    const {updateUserState:{ updateUser:{result, isLoading, error} }, updateUserDispatch}  = useContext(AuthContext);

    const history = useHistory();

    const refs = {
        firstName: createRef(),
        lastName: createRef(),
        email: createRef()
    }

    const formSubmitHandler = (e) =>{
        e.preventDefault();

        setFormInput({
            ...formInput,
            firstName: refs.firstName.current.value,
            lastName: refs.lastName.current.value,
            email: refs.email.current.value
        }) 
        setIsSubmit(true);
    }
  
    const isModalActive = (isActive) => {

        let editProfileModal =  Query.editProfile();

        if(isActive){
            editProfileModal.classList.add('active');
        }else{
            editProfileModal.classList.remove('active');
        }

        editProfileModal.addEventListener('click', (e) => {
            if(e.target === editProfileModal){
                setIsActive(false);
            }
        })

    }

    useEffect(() => {
        isModalActive(isActive);
    }, [isActive])

    
    useEffect(() => {
        if(updatedData){
            refs.firstName.current.value = updatedData.firstName;
            refs.lastName.current.value = updatedData.lastName;
            refs.email.current.value = updatedData.email;
        }

        if(isSubmit){
            let input = formInput;
            let reqData = localStorage.jwt_token;
            let isDecode = true;
            let path = '/profile';
            let type = 'modal';
            
            updateUserInfo(history, input, reqData, isDecode, path, type, setIsActive)(updateUserDispatch);
            setIsSubmit(false);
            setUpdatedData(formInput);
            console.log(formInput)
        }
    }, [isSubmit])

    return(
        <EditProfile
            formSubmitHandler = {formSubmitHandler}
            isLoading = {isLoading}
            error = {error}
            refs = {refs}
            updatedData = {updatedData}
        />
    )
}

export default EditProfileContainer;