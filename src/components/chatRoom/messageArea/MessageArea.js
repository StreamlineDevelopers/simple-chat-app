import React from 'react'

const MessageArea = ({ sendClickHandler, textAreaChangeHandler, message }) => {
    return (
        <div className="message-area">
            <div className="message-area-wrapper">
                <textarea value={message} placeholder='Say something ...' onChange={e => textAreaChangeHandler(e)} className="message-text-area normal-2" name="message-text"></textarea>
                <button disabled={!message} className="message-area-send normal-2" onClick={e => sendClickHandler(e)}>send</button>
            </div>
        </div>
    )
}

export default MessageArea
