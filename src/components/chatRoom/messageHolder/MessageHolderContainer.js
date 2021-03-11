import React from 'react';
import MessageHolder from './MessageHolder.js';

const MessageHolderContainer = ({ name, content, date, currentUid, messageUid }) => {
   
    return (
        <MessageHolder
            name = {name}
            content = {content}
            date = {date}
            currentUid = {currentUid}
            messageUid = {messageUid}
        />
    )
}

export default MessageHolderContainer
