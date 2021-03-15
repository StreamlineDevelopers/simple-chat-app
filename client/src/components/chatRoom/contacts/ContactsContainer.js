import React, { useState } from 'react';
import Contacts from './Contacts.js';

const ContactsContainer = ({ joinedUsers, isMessageLoading }) => {
    const [userDetails, setUserDetails] = useState({});
    const [isUserDetailsActive, setIsUserDetailsActive] = useState(false);

    const contactClickHandler = (e) => {
        e.preventDefault();
        let data = e.currentTarget.dataset;
        setUserDetails(data);
        setIsUserDetailsActive(true);
    }

    return (
        <Contacts
            joinedUsers = {joinedUsers}
            isMessageLoading = {isMessageLoading}
            contactClickHandler = {contactClickHandler}
            isUserDetailsActive = {isUserDetailsActive}
            setIsUserDetailsActive = {setIsUserDetailsActive}
            userDetails = {userDetails}
        />
    )
}

export default ContactsContainer
