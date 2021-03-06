import React, { useEffect, useState } from 'react';
import JoinRoom from './JoinRoom.js';

//utils
import Query from '../../../helper/query.js';

const JoinRoomContainer = ({isActive, setIsActive}) => {
    const [formInput, setFormInput] = useState({
        room: ''
    });

    const formSubmitHandler = (e) =>{
        e.preventDefault();
        console.log(formInput);
    }

    const isModalActive = (isActive) => {

        let createRoomModal =  Query.joinRoomModal();

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
        <JoinRoom
            formSubmitHandler = {formSubmitHandler}
        />
    )
}

export default JoinRoomContainer;