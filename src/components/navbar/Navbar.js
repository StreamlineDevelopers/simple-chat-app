import React from 'react';
import {Link} from 'react-router-dom';

const nav = (pathname, logoutClickHandler) => {
    if(pathname !== '/'){
        return(
            <div className="navbar__items--in">
                { pathname === '/profile' && <Link to='/Dashboard'><li className="normal-2 navbar__items--in" >Home</li></Link>}
                { pathname === '/dashboard/chatroom' && <Link to='/Dashboard'><li className="normal-2 navbar__items--in" >Home</li></Link>}
                <li className="normal-2 navbar__items--in less" onClick={e => logoutClickHandler(e)}>Logout</li>
            </div>
        )
    }
}

const Navbar = (props) => {
    let logoutClickHandler = props.logoutClickHandler;
    let pathname = props.pathname;
    
    return(
        <nav className="navbar">
            <div className="navbar-wrapper">
                <Link to='/dashboard'><h2>hellochat</h2></Link>
                <ul className="navbar__items">
                    {nav(pathname, logoutClickHandler)}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;