import React, { useEffect } from 'react';
import UserDetails from './UserDetails.js';

//utils
import Query from '../../../helper/query.js';

const UserDetailsContainer = ({ isActive, setIsActive, data }) => {
   
    const isModalActive = (isActive) => {

        let userDetailsModal =  Query.userDetailsModal();

        if(isActive){
            userDetailsModal.classList.add('active');
        }else{
            userDetailsModal.classList.remove('active');
        }

        userDetailsModal.addEventListener('click', (e) => {
            if(e.target === userDetailsModal){
                setIsActive(false);
            }
        })

    }

    useEffect(() => {
        isModalActive(isActive);
    }, [isActive])

    return(
        <UserDetails
           data = {data}
        />
    )
}

export default UserDetailsContainer;