const query = {
    
    //modal
    createRoomModal: () => document.querySelector('.create-room-modal'),
    joinRoomModal: () => document.querySelector('.join-room-modal'),
    editProfile: () => document.querySelector('.edit-profile-modal'),
    changePass: () => document.querySelector('.change-pass-modal'),
    userDetailsModal: () => document.querySelector('.user-details-modal'),

    //message status
    messageholderAll: () => document.querySelectorAll('.message-holder'),
    chatRoomBody: () => document.querySelector('.chat-room__body'),
    chatRoomBodyStatus: () => document.querySelector('.chat-room__body-status'),
    sendButton: () =>  document.querySelector('.message-area-send'),
    textAreaSend: () =>  document.querySelector('.message-text-area'),

    //emojipicker
    emojiPickerReact:() => document.querySelector('.emoji-picker-react')
}

export default query;