import React, { useContext, useEffect, useState } from 'react'
import  { useHistory } from 'react-router-dom'
import io from 'socket.io-client';

//helper
import axiosInstance from '../../helper/axiosInstance.js';
import query from '../../helper/query.js';

//component
import ChatRoom from './ChatRoom.js';

// context api
import AuthContext from '../../context/AuthContext.js';

let socket;

const ChatRoomContainer = () => {
    const [messages, setMessages] = useState([]);
    const [userChatStatus, setUserChatStatus] = useState([]);
    const [joinedUsers, setJoinedUsers] = useState([]);
    const [isMessageLoading, setIsMessageLoading] = useState(true);

    const {updateUserState:{ updateUser:{result} }}  = useContext(AuthContext);

    const history = useHistory();
    
    let SERVER = 'https://simple-chat-app-mad-server.herokuapp.com';
    let KEY = 'tempUserData';

    //store user info to use later then remove when path is changed or disconnected
    let stringifiedUserObject = JSON.stringify(result);
    !localStorage.tempUserData && localStorage.setItem(KEY, stringifiedUserObject);
    
    let user = JSON.parse(localStorage.tempUserData);

    const appendRoomUserStatus = () => {
        let statusContainer = query.chatRoomBodyStatus();
        statusContainer.innerHTML = '';
        
        userChatStatus.map((status,i) => {
            let value = `<span key=${i} className="chat-room__body-status normal-2">${status}</span>`
            statusContainer.innerHTML += value;
        })
    }

    const getMessages = async() => {
        try {
            const message = await axiosInstance(history).get(`/auth/messages`, {
                headers: {
                    'jwt_token': localStorage.jwt_token
                }
            })
            setMessages(message.data);
            setIsMessageLoading(false);
        } catch (error) {
            // console.log(error);
            setIsMessageLoading(false)
        }
    }

    //#region use effects logic
    useEffect(() => {
        // this function also includes axios interceptor
        // updateUserInfo(history)(updateUserDispatch);
        getMessages();

        socket = io(SERVER, {
            // fixs the cors error for socket io
            'transports': ['websocket'], 
        });

        if(user) socket.emit('join', { _uid: user._id, firstName: user.firstName, lastName: user.lastName , email: user.email });

        socket.on("connect_error", ({message}) => {
            // console.log(`connect_error due to ${message}`);
        });
        return(() => {
            socket.disconnect();
            socket.off();
            localStorage.removeItem(KEY);
        })
       
    }, [SERVER])
   
    useEffect(() => {
        socket.on('message', (message) => {
            setMessages([...messages, message])
        })

    }, [messages]) 

    useEffect(() => {
        socket.on('welcome', (data) => {
            let content = data.content 
            setUserChatStatus([content]);
            // console.log('welcome',data);
        })
        socket.on('anouncement', (data) => {
            let content = data.content 
            setUserChatStatus([content]);
            // console.log('announce',data);
        })

        appendRoomUserStatus();
        // console.log('ALL STATUS HERE',userChatStatus)
    }, [userChatStatus])

    useEffect(() => {
        socket.on('onlineUsers', (data) => {
            let content = data.user;

            setJoinedUsers(content);
            // console.log(content)
        })
    }, [joinedUsers])

    //#endregion
   
    return (
        <div>
            <ChatRoom
                messages = {messages}
                joinedUsers = {joinedUsers}
                user = {user}
                isMessageLoading = {isMessageLoading}
            />
        </div>
    )
}

export default ChatRoomContainer
