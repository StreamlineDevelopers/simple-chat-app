import React, { useContext, useEffect, useState } from 'react';
import ChangePass from './ChangePass.js';

//utils
import Query from '../../../helper/query.js';

// context api
import AuthContext from '../../../context/AuthContext.js';
import { changePass } from '../../../context/actions/users/changePass.js';
import { useHistory } from 'react-router';

const ChangePassContainer = ({ isActive, setIsActive }) => {
    const [formInput, setFormInput] = useState({
        currentPassword: '',
        newPassword: '',
        confirmNewPassword: ''
    });

    const {changePassState:{ changePass:{newPassword, isLoading, error} }, changePassDispatch}  = useContext(AuthContext);
    
    const history = useHistory();

    const formSubmitHandler = (e) =>{
        e.preventDefault();
        console.log(formInput);
        changePass(history, formInput, setIsActive)(changePassDispatch);
    }
    
    const inputChangeHandler = (e) => {
        e.preventDefault();
        
        setFormInput({
            ...formInput,
            [e.target.name]: e.target.value
        })  
    } // get input form data through onChange event
    

    const isModalActive = (isActive) => {

        let changePassModal =  Query.changePass();

        if(isActive){
            changePassModal.classList.add('active');
        }else{
            changePassModal.classList.remove('active');
        }

        changePassModal.addEventListener('click', (e) => {
            if(e.target === changePassModal){
                setIsActive(false);
            }
        })

    }

    useEffect(() => {
        isModalActive(isActive);
    }, [isActive])

    return(
        <ChangePass
            formSubmitHandler = {formSubmitHandler}
            inputChangeHandler = {inputChangeHandler}
            isLoading = {isLoading}
            error = {error}
        />
    )
}

export default ChangePassContainer;