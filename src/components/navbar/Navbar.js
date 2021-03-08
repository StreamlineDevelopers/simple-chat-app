import React from 'react';
import {Link} from 'react-router-dom';

// modal compoenents
import JoinRoomModal from '../../components/modal/joinRoom/JoinRoomContainer.js';

const nav = (pathname, roomClickHandler, contactClickHandler) => {
    if(pathname !== '/'){
        return(
            <div className="navbar__items--in">
                <li className="normal-2 navbar__items--in" onClick={e => roomClickHandler(e)}>rooms</li>
                <li className="normal-2 navbar__items--in less" onClick={e => contactClickHandler(e)}>contacts</li>
            </div>
        )
    }
}

const Navbar = (props) => {
    let roomClickHandler = props.roomClickHandler;
    let contactClickHandler = props.contactClickHandler;
    let joinIsActive = props.joinIsActive;
    let joinSetIsActive = props.joinSetIsActive;
    let pathname = props.pathname;
    
    return(
        <nav className="navbar">
            <div className="navbar-wrapper">
                <Link to='/dashboard'><h2>hellochat</h2></Link>
                <ul className="navbar__items">
                    {nav(pathname, roomClickHandler, contactClickHandler)}
                </ul>
            </div>

            <JoinRoomModal
                isActive = {joinIsActive}
                setIsActive = {joinSetIsActive}
            /> 
        </nav>
    )
}

export default Navbar;