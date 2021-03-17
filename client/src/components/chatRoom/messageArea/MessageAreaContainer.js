import React, { useState } from 'react';
import axios from 'axios';
import moment from 'moment';
import query from '../../../helper/query.js';
import MessageArea from './MessageArea.js';

let SERVER = 'https://simple-chat-app-mad-server.herokuapp.com';

const MessageAreaContainer = () => {
    const [message, setMessage] = useState([]);

    const sendClickHandler = (e) => {
        e.preventDefault();
        let statusContainer = query.chatRoomBodyStatus();
        let storedUser = localStorage.tempUserData;
        let { _id, firstName } = JSON.parse(storedUser);
        let msg = message.join(' ');

        sendMessage({
            uid: _id,
            firstName,
            message: msg,
            dateCreated: moment()
        });
       
        setMessage('');

        // reset status on send
        statusContainer.innerHTML = '';
    }

    const textAreaChangeHandler = (e) => {
        e.preventDefault();

        setMessage([e.target.value]);
    }

    const sendMessage = (message) => {
        axios.post(`${SERVER}/api/auth/messages`, message, {
            headers: {
              'jwt_token': localStorage.jwt_token
            }
        })
    }

    const onEmojiClick = (event, emojiObject) => {
        setMessage([...message, emojiObject.emoji])
      };

    const pickerActiveClickHandler = (e) =>{
        e.preventDefault();
        query.emojiPickerReact().classList.toggle('active');
    }
    return (
        <MessageArea
            sendClickHandler = {sendClickHandler}
            textAreaChangeHandler = {textAreaChangeHandler}
            message = {message}
            sendMessage = {sendMessage}
            onEmojiClick = {onEmojiClick}
            pickerActiveClickHandler = {pickerActiveClickHandler}
        />
    )
}

export default MessageAreaContainer
