import React from 'react';

//user details modal
import UserDetailsModal from '../../modal/userDetails/UserDetailsContainer.js';

const Contacts = (props) => {

    let joinedUsers = props.joinedUsers;
    let isMessageLoading = props.isMessageLoading;

    let isUserDetailsActive = props.isUserDetailsActive;
    let setIsUserDetailsActive = props.setIsUserDetailsActive;
    
    let contactClickHandler = props.contactClickHandler;
    let userDetails = props.userDetails;
    
    let totalOnline = joinedUsers.length;

    return (
       <div className="contacts">
           <div className="contacts-wrapper">
               <div className="contacts-online normal-2">
                    <span className="contacts-online-title">Online - {totalOnline}</span>
                    <ul>
                        {isMessageLoading ? 
                            (<i className="fa fa-circle-o-notch fa-spin"></i>):
                            (joinedUsers && joinedUsers.map((user) => 
                                <li 
                                    onClick={e => contactClickHandler(e)}  
                                    key={`user-${user._socketId}`}
                                    data-firstname={user.firstName}
                                    data-lastname={user.lastName}
                                    data-email={user.email}
                                >
                                    <i className="fa fa-circle" aria-hidden="true"></i>
                                    <span>{user.firstName}</span>
                                </li>
                            ))
                        } 
                    </ul>
               </div>
               <UserDetailsModal
                    isActive = {isUserDetailsActive}
                    setIsActive = {setIsUserDetailsActive}
                    data = {userDetails}
               />

           </div>
       </div>
    )
}

export default Contacts
