import React, { useEffect, useState } from 'react';
import CreateRoom from './CreateRoom.js';

//utils
import Query from '../../../helper/query.js';

const CreateRoomContainer = ({isActive, setIsActive}) => {
    const [formInput, setFormInput] = useState({
        room: ''
    });

    const formSubmitHandler = (e) =>{
        e.preventDefault();
        console.log(formInput);
    }

    const handleTextOnChange = (e) => {
        e.preventDefault();
        setFormInput({
            ...formInput,
            room : e.target.value
        })
    }

    const isModalActive = (isActive) => {

        let createRoomModal =  Query.createRoomModal();

        if(isActive){
            createRoomModal.classList.add('active');
        }else{
            createRoomModal.classList.remove('active');
        }

        createRoomModal.addEventListener('click', (e) => {
            if(e.target === createRoomModal){
                setIsActive(false);
            }
        })

    }

    useEffect(() => {
        isModalActive(isActive);

    }, [isActive])
    
    return(
        <CreateRoom
            formSubmitHandler = {formSubmitHandler}
            handleTextOnChange = {handleTextOnChange}
        />
    )
}

export default CreateRoomContainer;