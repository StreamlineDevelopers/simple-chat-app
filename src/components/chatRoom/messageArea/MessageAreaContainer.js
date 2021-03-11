import React, { useEffect, useState } from 'react';
import axios from 'axios';
import moment from 'moment';

import query from '../../../helper/query.js';
import MessageArea from './MessageArea.js';

let SERVER = 'http://localhost:5000';

const MessageAreaContainer = () => {
    const [message, setMessage] = useState('');

    const sendClickHandler = (e) => {
        e.preventDefault();
        let statusContainer = query.chatRoomBodyStatus();
        let storedUser = localStorage.tempUserData;
        let { _id, firstName } = JSON.parse(storedUser);

        sendMessage({
            uid: _id,
            firstName,
            message,
            dateCreated: moment()
        });

        setMessage('');
        // reset status on send
        statusContainer.innerHTML = '';
    }

    const textAreaChangeHandler = (e) => {
        e.preventDefault();
        setMessage(e.target.value);
    }

    const sendMessage = (message) => {
        axios.post(`${SERVER}/api/auth/messages`, message, {
            headers: {
              'jwt_token': localStorage.jwt_token
            }
        })
    }

    return (
        <MessageArea
            sendClickHandler = {sendClickHandler}
            textAreaChangeHandler = {textAreaChangeHandler}
            message = {message}
            sendMessage = {sendMessage}
        />
    )
}

export default MessageAreaContainer
