import React from 'react';
import {Link} from 'react-router-dom';

// modal compoenents
import JoinRoomModal from '../../components/modal/joinRoom/JoinRoomContainer.js';

const Navbar = (props) => {
    let roomClickHandler = props.roomClickHandler;
    let contactClickHandler = props.contactClickHandler;
    let joinIsActive = props.joinIsActive;
    let joinSetIsActive = props.joinSetIsActive;

    return(
        <nav className="navbar">
            <div className="navbar-wrapper">
                <Link to='dashboard'><picture className="navbar__avatar"><img src="#" alt="pic here"/></picture></Link>
                <ul className="navbar__items">
                    <Link to='/'><li className="normal-2 navbar__items--out">signin</li></Link>
                    <Link to='/register'><li className="normal-2 navbar__items--out less">signup</li></Link>
                    <li className="normal-2 navbar__items--in" onClick={e => roomClickHandler(e)}>rooms</li>
                    <li className="normal-2 navbar__items--in less" onClick={e => contactClickHandler(e)}>contacts</li>
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