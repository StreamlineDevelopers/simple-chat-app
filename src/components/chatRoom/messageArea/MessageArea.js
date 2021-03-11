import React from 'react'
import Picker from "emoji-picker-react";

const MessageArea = ({ sendClickHandler, textAreaChangeHandler, message, onEmojiClick, pickerActiveClickHandler }) => {
    return (
        <div className="message-area">
            <Picker 
                onEmojiClick={onEmojiClick}
                disableSearchBar={true}
                native={true}
                groupVisibility={{
                    flags: false,
                    animals_nature:false,
                    objects: false,
                    symbols: false,
                    recently_used: false,
                }}
            />
            <div className="message-area-wrapper">
                <button onClick={e => pickerActiveClickHandler(e)}><i class="fas fa-smile-wink"></i></button>
                <textarea 
                    value={message && message.join('')} placeholder='Say something ...' 
                    onChange={e => textAreaChangeHandler(e)} 
                    className="message-text-area normal-2" 
                    name="message-text"
                ></textarea>
                <button disabled={!message} className="message-area-send normal-2" onClick={e => sendClickHandler(e)}>send</button>
            </div>
        </div>
    )
}

export default MessageArea
