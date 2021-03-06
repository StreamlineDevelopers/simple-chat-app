import React from 'react';
import {Link} from 'react-router-dom';

const Login = ({ formClickhandler, inputChangeHandler }) => {
    
    return(
        <div className="login">
          <div className="login-card">
            <h2>hellochat</h2>
            <form onSubmit={e => formClickhandler(e)} >
                <div> 
                    <input id="email" onChange={e => inputChangeHandler(e)} className="normal-1" type="email" autoComplete="off" name="email" required/>
                    <label className="normal-1" htmlFor="email">Email</label>
                </div>
                <div>
                    <input id="password" onChange={e => inputChangeHandler(e)} className="normal-1" type="password" autoComplete="off" name="password" required/>
                    <label className="normal-1" htmlFor="password">Password</label>
                </div>
                <button className="normal-1" type="submit">Login</button>
            </form>
            <Link to="/register"><span className="normal-2">Dont have an account?</span></Link>
          </div>
        </div>
    )
}

export default Login;