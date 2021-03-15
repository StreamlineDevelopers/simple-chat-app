import React from 'react';
import Moment from 'react-moment';

const MessageHolder = ({ name, content, date, currentUid, messageUid }) => {
    let isCurrentUser = currentUid === messageUid;
    let isActive = isCurrentUser ? 'active' : '';
    
    return (
        <div className={`message-holder ${isActive}`}>
            <div className="message-holder-wrapper normal-2">
                <span className="message-holder__name normal-2">{name}</span>
                <p className="message-holder__content normal-2">{content}</p>
                <span className="message-holder__date normal-2"><Moment fromNow>{date}</Moment></span>
            </div>
        </div>
    )
}

export default MessageHolder
