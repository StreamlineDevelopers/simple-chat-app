import React from 'react'
import ScrollToBottom from 'react-scroll-to-bottom';

// chat room components
import MessageAreaContainer from '../../components/chatRoom/messageArea/MessageAreaContainer.js';
import MessageHolderContainer from '../../components/chatRoom/messageHolder/MessageHolderContainer.js';
import ContactsContainer from '../../components/chatRoom/contacts/ContactsContainer.js';

const ChatRoom = ({ messages, joinedUsers, user, isMessageLoading, toggleActive, toggleContactClickHandler}) => {

    return (
        <div className="chat-room">
            <div className="chat-room__contact-toggle" onClick={e => toggleContactClickHandler(e)}>
                {toggleActive ? (  <i class="fas fa-toggle-on fa-contact"></i>) : (<i class="fas fa-toggle-off fa-contact"></i>)}
                <span className="normal-2">Toggle Me</span>
            </div>

            <div className="chat-room-container">
                <div className="chat-room-wrapper">
                    <ScrollToBottom className="chat-room__body" scrollViewClassName='scroll-child'>
                        {messages && messages.map((message, i) => 
                            <MessageHolderContainer
                                key={`message-${i}`}
                                name={message.firstName}
                                content={message.message}
                                date={message.dateCreated}
                                currentUid={user._id}
                                messageUid={message.uid}
                            />
                        )}
                        <div className="chat-room__body-status"></div>
                    </ScrollToBottom>
                    
                    <div className="chat-room__message">
                        <MessageAreaContainer/>
                    </div>
                </div>
                <ContactsContainer
                    joinedUsers = {joinedUsers}
                    isMessageLoading = {isMessageLoading}
                />
            </div>
        </div>
    )
}

export default ChatRoom
